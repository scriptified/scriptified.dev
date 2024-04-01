/* eslint-disable prettier/prettier */
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
const path = require('path');
const commandLineArgs = require('command-line-args');
const process = require('process');
require('dotenv').config({ path: './.env.local' });

const options = commandLineArgs(optionDefinitions);

if ('help' in options) {
  console.log(`
  Usage: node scripts/issueEmailGenerator.js [--issueNumber=<issueNumber>]
  `);
  process.exitCode = 1;
}

if ('issueNumber' in options && typeof options.issueNumber !== 'number') {
  console.log('Please provide a valid issue number');
  process.exitCode = -1;
}

if ('issueNumber' in options && typeof options.issueNumber === 'number') {
  (async () => {

    const id = options.issueNumber;
    const issueFileName = `issue-${id}.json`;
    const filePath = path.join(process.cwd(), `/collections/_issues/${issueFileName}`);


    const currentIssue = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

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

    function getOGImage(title, issueNumber, date) {
      const parsedDate = convertDate(date);
      return `${process.env.NEXT_PUBLIC_OG_IMAGE_BASE}${encodeURIComponent(
        title
      )}.png?issue_number=${issueNumber}&date=${encodeURIComponent(parsedDate)}`;
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
      return `${process.env.NEXT_PUBLIC_ASSETS_URL}issue-${issueNumber}/${assetURL}`;
    }

    function getAuthors(authors) {
      if (authors?.length) {
        return `*by ${authors.join(', ')}*`;
      } else {
        return '';
      }
    }

    const getUrlWithUtmTrackingParams = ({ url, medium = 'newsletter' }) => {
      const utmParams = {
        utm_source: 'scriptified.dev',
        utm_medium: medium,
      };

      try {
        const urlWithParams = new URL(url);

        Object.keys(utmParams).forEach(key => {
          urlWithParams.searchParams.set(key, utmParams[key]);
        });

        return urlWithParams.toString();
      } catch (err) {
        console.error(err);
        // return url as is if URL is invalid
        return url;
      }
    };

    const ogImgURL = getOGImage(currentIssue.title, currentIssue.id, currentIssue.date);

    const issueWebUrl = getUrlWithUtmTrackingParams({ url: `https://scriptified.dev/issues/${currentIssue.id}` });

    const emailTemplate = `
![Headshot](${ogImgURL})

<center>[Read issue on web](${issueWebUrl})</center>

${currentIssue.description}

# Tip of the day

${currentIssue.tip_of_the_week.description}

${
  currentIssue.tip_of_the_week.codeSnippet &&
  ` 
\`\`\`${currentIssue.tip_of_the_week.codeSnippet.language}
${currentIssue.tip_of_the_week.codeSnippet.code.code}
\`\`\`
`
}

${getAuthors(currentIssue.tip_of_the_week?.authors)}
___

# Articles

${currentIssue.articles
  .map(
    article =>
      `[**${article.title}**](${getUrlWithUtmTrackingParams({ url: article.url })})

${article.description}

${getAuthors(article?.authors)}
`
  )
  .join('\n')}

___

${
  currentIssue.devOfTheWeek
    ? `# Dev of the Week 
    
<img alt="${currentIssue.devOfTheWeek.name}" src="${getAssetURL(
        currentIssue.id,
        currentIssue.devOfTheWeek.profileImg
      )}" style="width:200px;"/> 
  
## ${currentIssue.devOfTheWeek.name} 
${currentIssue.devOfTheWeek.bio} 
  
${Object.keys(currentIssue.devOfTheWeek)
  .filter(key => PROFILE_KEYS.includes(key) && currentIssue.devOfTheWeek[key] !== null)
  .map(profile => `[${PROFILE_TYPES[profile]}](${currentIssue.devOfTheWeek[profile]})`)
  .join(' | ')}

___`
    : ''
}

# Tools

${currentIssue.tools
  .map(
    tool =>
      `[**${tool.name}**](${getUrlWithUtmTrackingParams({ url: tool.url })})
    
${tool.description}

${getAuthors(tool?.authors)}
`
  )
  .join('\n')}

___

# Tech Talks

[**${currentIssue.talks[0].title}**](${getUrlWithUtmTrackingParams({ url: currentIssue.talks[0].url })})

${getUrlWithUtmTrackingParams({ url: currentIssue.talks[0].url })})

${currentIssue.talks[0].description}

${getAuthors(currentIssue.talks?.[0]?.authors)}

___

# Quiz

### ${currentIssue.quiz.question}

\`\`\`${currentIssue.quiz.codeSnippet.language}
${currentIssue.quiz.codeSnippet.code.code}
\`\`\`

${currentIssue.quiz.options
  .map(
    option =>
      `[<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">${option.text
        .split('\n')
        .join('<br>')}</div>](https://scriptified.dev/issues/${currentIssue.id}?section=quiz&option=${
        option.option_id
      })`
  )
  .join('\n')}


___

# This week in GIF

![${currentIssue.gif.caption}](${getAssetURL(currentIssue.id, currentIssue.gif.gifURL)})

[${currentIssue.gif.caption}](${process.env.SITE_URL}issues/${options.issueNumber}?section=gif)

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=${encodeURIComponent(`Have a look at issue #${currentIssue.id} of Scriptified.

Subscribe to @scriptified_dev for more.`)}&url=${encodeURIComponent(
      `${issueWebUrl}`
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
}
