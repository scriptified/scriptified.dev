/* eslint-disable prettier/prettier */
const axios = require('axios');
const fs = require('fs');
require('dotenv').config({ path: './.env.local' });


function convertToSlug(text) {
    return text.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
}

async function migrateIssues() {

    const issuesIds = Array.from({ length: 17 }, (_, i) => i + 1);

    const uniqueTags = new Set();

    for (const issueId of issuesIds) {
        /**
         * @typedef {import('../interfaces/api').IssueAPIResponse} IssueAPIResponse
         */

        /**
         * @type {IssueAPIResponse}
         */
        const issue = await axios.default.get(`${process.env.CMS_API}issues/${issueId}`).then(response => response.data);

        const issuesMappedForDecap = {
            title: issue.title,
            id: issue.id,
            description: issue.description,
            date: issue.dateOfPublishing,
            tools: issue.tools.map(tool => ({
                name: tool.name,
                description: tool.description,
                url: tool.url,
                logo: tool.logo,
                authors: tool.authors?.map(author => author.Name),
                tags: tool.tags?.map(tag => tag.name)
            })),
            articles: issue.articles.map(article => ({
                title: article.title,
                description: article.description,
                url: article.url,
                tags: article.tags?.map(tag => tag.name),
                authors: article.authors?.map(author => author.Name)
            })),
            talks: issue.talks.map(talk => ({
                title: talk.title,
                description: talk.description,
                url: talk.url,
                tags: talk.tags?.map(tag => tag.name),
                authors: talk.authors?.map(author => author.Name)
            })),
            tip_of_the_week: {
                description: issue.tipOfTheWeek.description,
                title: issue.tipOfTheWeek.title,
                sourceName: issue.tipOfTheWeek.sourceName,
                sourceURL: issue.tipOfTheWeek.sourceURL,
                codeSnippet: issue.tipOfTheWeek.codeSnippet ? {
                    language: issue.tipOfTheWeek.codeSnippet.language,
                    code: {
                        code: issue.tipOfTheWeek.codeSnippet.code
                    },
                    showLineNumbers: issue.tipOfTheWeek.codeSnippet.showLineNumbers
                } : undefined,
            },
            dev_of_the_week: issue.devOfTheWeek ? {
                name: issue.devOfTheWeek.name,
                bio: issue.devOfTheWeek.bio,
                profileImg: issue.devOfTheWeek.profileImg,
            } : undefined,
            quiz: {
                question: issue.quiz.question,
                answerId: issue.quiz.answerId,
                options: issue.quiz.Option.map(option => ({
                    option_id: option.option_id,
                    text: option.text,
                    description: option.description
                })),
                codeSnippet: issue.quiz.CodeSnippet ? {
                    language: issue.quiz.CodeSnippet.language,
                    code: {
                        code: issue.quiz.CodeSnippet.code
                    },
                    showLineNumbers: issue.quiz.CodeSnippet.showLineNumbers
                } : undefined,
            },
            gif: {
                gifURL: issue.gif.gifURL,
                caption: issue.gif.caption
            },
            isDraft: false
        };

        issuesMappedForDecap.tools.forEach(tool => tool.tags.forEach(tag => uniqueTags.add(tag)));
        issuesMappedForDecap.articles.forEach(article => article.tags.forEach(tag => uniqueTags.add(tag)));
        issuesMappedForDecap.talks.forEach(talk => talk.tags.forEach(tag => uniqueTags.add(tag)));

        // Create a json file and write the data to it
        fs.writeFileSync(`collections/_issues/issue-${issueId}.json`, JSON.stringify(issuesMappedForDecap, null, 4));
    }


    for (const tag of uniqueTags) {
        // console.log(tag);
        fs.writeFileSync(`collections/_tags/${convertToSlug(tag)}.json`, JSON.stringify({
            name: tag
        }));
    }
}

async function migrateAuthors() {
    const authors = await axios.default.get(`${process.env.CMS_API}authors`).then(response => response.data);

    for (const author of authors) {
        fs.writeFileSync(`collections/_authors/${convertToSlug(author.Name)}.json`, JSON.stringify({
            name: author.Name,
            website: author.Website,
        }));
    }

}

migrateIssues();
