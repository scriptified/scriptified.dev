import axios from 'axios';
import { IssueAPIResponse } from '../interfaces/api';
import { Issue } from '../interfaces/issue';
import { convertDate } from '../utils';
import cloneDeep from 'lodash/cloneDeep';
import SAMPLE_ISSUE from './sampleIssue';

const ASSETS_URL = 'https://images.scriptified.dev/';

const OG_IMAGE_BASE = 'https://og.scriptified.dev/';

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

function getIndividualSampleIssue(id: number): Promise<IssueAPIResponse> {
  const response = cloneDeep(SAMPLE_ISSUE) as IssueAPIResponse;
  response.id = id;

  return new Promise(resolve => resolve(response));
}

function getReversedSampleIssues(limit: number): Promise<IssueAPIResponse[]> {
  const issueIDs = Array.from({ length: limit }, (_, i) => limit - i);
  const response = issueIDs.map(id => {
    const currentItem: IssueAPIResponse = cloneDeep(SAMPLE_ISSUE);
    currentItem.id = id;
    return currentItem;
  });
  return new Promise(resolve => resolve(response));
}

function oxfordComma(arr: string[]): string {
  if (arr.length === 1) return arr[0];
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  return firsts.join(', ') + ' and ' + last;
}

function getOGImage(title: string, issueNumber: number, date: string): string {
  const parsedDate = convertDate(date);
  return `${OG_IMAGE_BASE}${encodeURIComponent(title)}.png?issue_number=${issueNumber}&date=${encodeURIComponent(
    parsedDate
  )}`;
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

function getAssetURL(issueNumber: number, assetURL: string) {
  if (isValidHttpUrl(assetURL)) {
    return assetURL;
  }
  return `${ASSETS_URL}issue-${issueNumber}/${assetURL}`;
}

export function mapToIssue(issue: IssueAPIResponse): Issue {
  return {
    meta: {
      number: issue.id,
      title: issue.title,
      desc: issue.description,
      dateOfPublishing: issue.dateOfPublishing,
      imgURL: getOGImage(issue.title, issue.id, issue.dateOfPublishing),
    },
    tipOfTheWeek: {
      snippet: issue.tipOfTheWeek.codeSnippet,
      desc: issue.tipOfTheWeek.description,
      sourceName: issue.tipOfTheWeek.sourceName,
      sourceURL: issue.tipOfTheWeek.sourceURL,
    },
    articles: issue.articles.map(article => ({
      title: article.title,
      desc: article.description,
      url: article.url,
      tags: article.tags.map(tag => tag.name),
      author: oxfordComma(article.authors.map(author => author.Name)),
    })),
    talks: issue.talks.map(talk => ({
      title: talk.title,
      talkURL: talk.url,
      desc: talk.description,
      tags: talk.tags.map(tag => tag.name),
    })),
    tools: issue.tools.map(tool => ({
      title: tool.name,
      url: tool.url,
      logo: getAssetURL(issue.id, tool.logo),
      desc: tool.description,
      tags: tool.tags.map(tag => tag.name),
      author: oxfordComma(tool.authors.map(author => author.Name)),
    })),
    devOfTheWeek: {
      name: issue.devOfTheWeek.name,
      profileImg: getAssetURL(issue.id, issue.devOfTheWeek.profileImg),
      bio: issue.devOfTheWeek.bio,
      profileLink: {
        youtube: issue.devOfTheWeek.youtube,
        github: issue.devOfTheWeek.github,
        linkedin: issue.devOfTheWeek.linkedin,
        website: issue.devOfTheWeek.website,
        twitter: issue.devOfTheWeek.twitter,
        instagram: issue.devOfTheWeek.instagram,
      },
    },
    gif: {
      gifURL: getAssetURL(issue.id, issue.gif.gifURL),
      caption: issue.gif.caption,
    },
    quiz: {
      question: issue.quiz.question,
      answerId: issue.quiz.answerId,
      options: issue.quiz.Option.map(option => ({
        description: option.description,
        id: option.option_id,
        text: option.text,
      })),
      snippet: issue.quiz.CodeSnippet,
    },
  };
}

export function getAllIssuesMeta(issues: IssueAPIResponse[]) {
  return issues.map(issue => ({
    title: issue.title,
    desc: issue.description,
    number: issue.id,
    dateOfPublishing: issue.dateOfPublishing,
    imgURL: issue.imgURL,
  }));
}

const getAxiosRequest = <T>(url: string): Promise<T> => axios.get<T>(url).then(({ data }) => data);

export const issueAPI = {
  allIssuesReversed: (): Promise<IssueAPIResponse[]> =>
    process.env.NODE_ENV === 'production'
      ? getAxiosRequest<IssueAPIResponse[]>(`${process.env.CMS_API}issues?_sort=id:DESC`)
      : getReversedSampleIssues(5),
  limitedIssuesReversed: (limit = 3): Promise<IssueAPIResponse[]> =>
    process.env.NODE_ENV === 'production'
      ? getAxiosRequest<IssueAPIResponse[]>(`${process.env.CMS_API}issues?_sort=id:DESC&_limit=${limit}`)
      : getReversedSampleIssues(limit),
  getIssue: (id: number): Promise<IssueAPIResponse> =>
    process.env.NODE_ENV === 'production'
      ? getAxiosRequest<IssueAPIResponse>(`${process.env.CMS_API}issues/${id}`)
      : getIndividualSampleIssue(id),
};
