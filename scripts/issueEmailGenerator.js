/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This script generates the email template
 * for a particular issue.
 *
 * Use this script to generate the email template
 * via the following command:
 *
 *  > node scripts/issueEmailGenerator.js --issueNumber <issueNumber>
 */

const optionDefinitions = [
  { name: 'issueNumber', alias: 'i', type: Number },
  { name: 'help', alias: 'h', type: Boolean },
];

const fs = require('fs');
const axios = require('axios');
const commandLineArgs = require('command-line-args');
require('dotenv').config({ path: './.env.local' });

const options = commandLineArgs(optionDefinitions);

if (options.help) {
  console.log(`
  Usage: node scripts/issueEmailGenerator.js [--issueNumber=<issueNumber>]
  `);
  return;
}

if (typeof options.issueNumber !== 'number') {
  console.log('Please provide a valid issue number');
  return;
}

(async () => {
  const currentIssue = await axios
    .get(`${process.env.CMS_API}issues/${options.issueNumber}`)
    .then(response => response.data);

  const PROFILE_TYPES = {
    website: 'Website',
    twitter: 'Twitter',
    github: 'GitHub',
    youtube: 'YouTube',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
  };

  const PROFILE_KEYS = ['webiste', 'twitter', 'github', 'youtube', 'linkedin', 'instagram'];

  const convertDate = date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const OG_IMAGE_BASE = 'https://og.scriptified.dev/';
  const ASSETS_URL = 'https://images.scriptified.dev/';

  function getOGImage(title, issueNumber, date) {
    const parsedDate = convertDate(date);
    return `${OG_IMAGE_BASE}${encodeURIComponent(title)}.png?issue_number=${issueNumber}&date=${encodeURIComponent(
      parsedDate
    )}`;
  }

  function isValidHttpUrl(str) {
    let url;

    try {
      url = new URL(str);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  }

  function getAssetURL(issueNumber, assetURL) {
    if (isValidHttpUrl(assetURL)) {
      return assetURL;
    }
    return `${ASSETS_URL}issue-${issueNumber}/${assetURL}`;
  }

  const ogImgURL = getOGImage(currentIssue.title, currentIssue.id, currentIssue.dateOfPublishing);

  const emailTemplate = `
![Headshot](${ogImgURL})

<center>[Read issue on web](https://scriptified.dev/issues/${currentIssue.id})</center>

${currentIssue.description}

# Tip of the day
${currentIssue.tipOfTheWeek.description}

${
  currentIssue.tipOfTheWeek.codeSnippet &&
  ` 
\`\`\`${currentIssue.tipOfTheWeek.codeSnippet.language}
${currentIssue.tipOfTheWeek.codeSnippet.code}
\`\`\`
`
}
___

# Articles

${currentIssue.articles
  .map(
    article =>
      `[**${article.title}**](${article.url})
	
${article.description}

*by ${article.authors.map(author => author.Name).join(', ')}*
`
  )
  .join('\n')}

___

# Tools

${currentIssue.tools
  .map(
    tool =>
      `[**${tool.name}**](${tool.url})
    
${tool.description}

*by ${tool.authors.map(author => author.Name).join(', ')}*
`
  )
  .join('\n')}

___

# Tech Talks

[**${currentIssue.talks[0].title}**](${currentIssue.talks[0].url})

${currentIssue.talks[0].url}

${currentIssue.talks[0].description}

___

# Quiz

### ${currentIssue.quiz.question}

\`\`\`${currentIssue.quiz.CodeSnippet.language}
${currentIssue.quiz.CodeSnippet.code}
\`\`\`

${currentIssue.quiz.Option.map(
  option => `<a href="https://scriptified.dev/issues/${currentIssue.id}?section=quiz&option=${option.option_id}" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	${option.text}
</div>
</a>
`
).join('\n')}


___

# This week in GIF

![${currentIssue.gif.caption}](${getAssetURL(currentIssue.id, currentIssue.gif.gifURL)})

<center>${currentIssue.gif.caption}</center>

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=${encodeURIComponent(`Have a look at issue #${currentIssue.id} of Scriptified.

Subscribe to @scriptified_dev for more.`)}&url=${encodeURIComponent(
    `https://scriptified.dev/issues/${currentIssue.id}`
  )}) or [read previous issues](https://scriptified.dev/issues).
`;

  const archiveDirectory = './archives';
  const issueFile = `${archiveDirectory}/issue${currentIssue.id}.md`;

  // create archives folder if iot doesn't exist
  if (!fs.existsSync(archiveDirectory)) {
    fs.mkdirSync(archiveDirectory);
  }

  // const issueFile = `./issue${currentIssue.id}.md`;

  // create a issue-{id}.md file in archives
  fs.closeSync(fs.openSync(issueFile, 'a'));

  // write email template to issue-{id}.md file
  fs.writeFileSync(issueFile, emailTemplate);
  console.log(`Created the template at - ${issueFile}`);
})();
