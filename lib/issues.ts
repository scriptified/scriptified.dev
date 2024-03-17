import fs from 'fs';
import path from 'path';
import { IssueAPIResponse } from '../interfaces/api';
import { Issue } from '../interfaces/issue';
import { convertDate } from '../utils';

const DEFAULT_TOOL_ASSET = `${process.env.NEXT_PUBLIC_ASSETS_URL}common/default-tool.png`;

export function getAllIssueIds(issues: IssueAPIResponse[]): Array<{ params: { id: string } }> {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 1
  //     }
  //   },
  //   {
  //     params: {
  //       id: 1
  //     }
  //   }
  // ]
  return issues.map(issue => ({
    params: {
      id: String(issue.id),
    },
  }));
}

export function oxfordComma(arr: string[]): string {
  if (arr.length === 1) return arr[0];
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  return firsts.join(', ') + ' and ' + last;
}

function getOGImage(title: string, issueNumber: number, date: string): string {
  const parsedDate = convertDate(date);
  return `${process.env.NEXT_PUBLIC_OG_IMAGE_BASE}${encodeURIComponent(
    title
  )}.png?issue_number=${issueNumber}&date=${encodeURIComponent(parsedDate)}`;
}

function isValidHttpUrl(str: string) {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}

function getAssetURL(issueNumber: number, assetURL: string | undefined | null, defaultAssetURL?: string): string {
  if ((typeof assetURL !== 'string' || assetURL.length === 0) && typeof defaultAssetURL === 'string') {
    return defaultAssetURL;
  }

  if (isValidHttpUrl(assetURL)) {
    return assetURL;
  }
  return `${process.env.NEXT_PUBLIC_ASSETS_URL}issue-${issueNumber}/${assetURL}`;
}

export function mapToIssue(issue: IssueAPIResponse): Issue {
  const meta = {
    number: issue.id,
    title: issue.title,
    desc: issue.description,
    dateOfPublishing: issue.date,
    imgURL: getOGImage(issue.title, issue.id, issue.date),
  };

  const tipOfTheWeek = issue.tip_of_the_week
    ? {
        snippet: issue.tip_of_the_week.codeSnippet
          ? {
              code: issue.tip_of_the_week.codeSnippet.code.code,
              language: issue.tip_of_the_week.codeSnippet.language,
              showLineNumbers: issue.tip_of_the_week.codeSnippet.showLineNumbers ?? false,
            }
          : null,
        desc: issue.tip_of_the_week.description,
        authors: issue.tip_of_the_week.sourceName
          ? [
              {
                id: 1,
                name: issue.tip_of_the_week.sourceName,
                website: issue.tip_of_the_week.sourceURL ?? '#',
              },
            ]
          : [],
      }
    : null;

  const articles = issue?.articles
    ? issue?.articles?.map(article => ({
        title: article.title,
        desc: article.description,
        url: article.url,
        tags: article.tags,
        authors: article.authors,
      }))
    : null;

  const talks = issue.talks
    ? issue.talks.map(talk => ({
        title: talk.title,
        talkURL: talk.url,
        desc: talk.description,
        tags: talk.tags,
        authors: talk.authors,
      }))
    : null;

  const tools = issue.tools
    ? issue.tools.map(tool => ({
        title: tool.name,
        url: tool.url,
        logo: getAssetURL(issue.id, tool.logo, DEFAULT_TOOL_ASSET),
        desc: tool.description,
        tags: tool.tags,
        authors: tool.authors,
      }))
    : null;

  const devOfTheWeek = issue.dev_of_the_week
    ? {
        name: issue.dev_of_the_week.name,
        profileImg: getAssetURL(issue.id, issue.dev_of_the_week.profileImg),
        bio: issue.dev_of_the_week.bio,
        profileLink: {
          youtube: issue.dev_of_the_week.youtube ?? null,
          github: issue.dev_of_the_week.github ?? null,
          linkedin: issue.dev_of_the_week.linkedin ?? null,
          website: issue.dev_of_the_week.website ?? null,
          twitter: issue.dev_of_the_week.twitter ?? null,
          instagram: issue.dev_of_the_week.instagram ?? null,
        },
      }
    : null;

  const gif = issue.gif
    ? {
        gifURL: getAssetURL(issue.id, issue.gif.gifURL),
        caption: issue.gif.caption,
      }
    : null;

  const quiz = issue.quiz
    ? {
        question: issue.quiz.question,
        answerId: issue.quiz.answerId,
        options: issue.quiz.options.map(option => ({
          description: option.description,
          id: option.option_id,
          text: option.text,
        })),
        snippet: {
          code: issue.quiz.codeSnippet.code.code,
          language: issue.quiz.codeSnippet.language,
          showLineNumbers: issue.quiz.codeSnippet.showLineNumbers ?? false,
        },
      }
    : null;

  const issueData = {
    meta,
    tipOfTheWeek,
    articles,
    talks,
    tools,
    devOfTheWeek,
    gif,
    quiz,
  };

  return issueData;
}

type IssuesMeta = {
  title: string;
  desc: string;
  number: number;
  dateOfPublishing: string;
  imgURL: string;
};

export function getAllIssuesMeta(issues: IssueAPIResponse[]): IssuesMeta[] {
  return issues.map(issue => ({
    title: issue.title,
    desc: issue.description,
    number: issue.id,
    dateOfPublishing: issue.date,
    imgURL: getOGImage(issue.title, issue.id, issue.date),
  }));
}

export const issueAPI = {
  allIssuesReversed: (limit?: number): Promise<IssueAPIResponse[]> => {
    const issuesDirectory = path.join(process.cwd(), '/collections/_issues');
    return new Promise((resolve, reject) => {
      fs.readdir(issuesDirectory, (err, files) => {
        if (err) {
          reject(err);
        }
        const issues = files
          .filter(file => file.includes('issue-'))
          .map(file => {
            const issue = JSON.parse(fs.readFileSync(path.join(issuesDirectory, file), 'utf8'));
            return issue;
          })
          .sort((a, b) => b.id - a.id)
          .filter(issue => process.env.IS_PREVIEW === 'true' || !issue.isDraft)
          .slice(0, limit);
        resolve(issues);
      });
    });
  },
  getIssue: async (id: number): Promise<IssueAPIResponse> => {
    const issueFileName = `issue-${id}.json`;
    return new Promise((resolve, reject) => {
      const filePath = path.join(process.cwd(), `/collections/_issues/${issueFileName}`);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (data) {
          const parsedData = JSON.parse(data);
          if (parsedData.isDraft && process.env.IS_PREVIEW !== 'true') {
            reject(new Error('Issue is a draft'));
          } else {
            resolve(JSON.parse(data));
          }
        }
        if (err) {
          console.error(err);
          reject(err);
        }
      });
    });
  },
};
