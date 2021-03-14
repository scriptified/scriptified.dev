/**
 * This script generates the email template
 * for a particular issue.
 *
 * To use this script paste the issue you want to
 * generate the template for in the currentIssue.js file.
 */
const fs = require('fs');
const currentIssue = require('./currentIssue');

const PROFILE_TYPES = {
  website: 'Website',
  twitter: 'Twitter',
  github: 'GitHub',
  youtube: 'YouTube',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
};

const emailTemplate = `
![Headshot](${currentIssue.meta.imgURL})

<center>[Read issue on web](https://scriptified.dev/issues/${currentIssue.meta.number})</center>

${currentIssue.meta.desc}

# Tip of the day
${currentIssue.tipOfTheWeek.desc}

\`\`\`${currentIssue.tipOfTheWeek.snippet.language}
${currentIssue.tipOfTheWeek.snippet.code}
\`\`\`

___

# Articles

${currentIssue.articles
  .map(
    article =>
      `[**${article.title}**](${article.url})
	
${article.desc}

*by ${article.author}*
`
  )
  .join('\n')}

___

# Tools

${currentIssue.tools
  .map(
    tool =>
      `[**${tool.title}**](${tool.url})
    
${tool.desc}

*by ${tool.author}*
`
  )
  .join('\n')}

___

# Dev of the Week

<img alt="${currentIssue.devOfTheWeek.name}" src="${currentIssue.devOfTheWeek.profileImg}" style="width:200px;"/>

## ${currentIssue.devOfTheWeek.name}
${currentIssue.devOfTheWeek.bio}

${Object.entries(currentIssue.devOfTheWeek.profileLink)
  .map(([profileType, link]) => `[${PROFILE_TYPES[profileType]}](${link})`)
  .join(' | ')}

___

# Tech Talks

[**${currentIssue.talks[0].title}**](${currentIssue.talks[0].talkURL})

${currentIssue.talks[0].desc}

___

# Quiz

### ${currentIssue.quiz.question}

\`\`\`${currentIssue.quiz.snippet.language}
${currentIssue.quiz.snippet.code}
\`\`\`

${currentIssue.quiz.options
  .map(
    option => `<a href="https://scriptified.dev/issues/${currentIssue.meta.number}?section=quiz&option=${option.id}" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	${option.text}
</div>
</a>
`
  )
  .join('\n')}


___

# This week in GIF

![${currentIssue.gif.caption}](https://scriptified.dev${currentIssue.gif.gifURL})

<center>${currentIssue.gif.caption}</center>

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=${encodeURIComponent(`Have a look at issue #${currentIssue.meta.number} of Scriptified.

Subscribe to @scriptified_dev for more.`)}&url=${encodeURIComponent(
  `https://scriptified.dev/issues/${currentIssue.meta.number}`
)}) or [read previous issues](https://scriptified.dev/issues).
`;

const issueFile = `archives/issue${currentIssue.meta.number}.md`;

fs.closeSync(fs.openSync(issueFile, 'a'));

fs.writeFileSync(issueFile, emailTemplate);
