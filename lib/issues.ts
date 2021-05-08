import { IssueAPIResponse } from '../interfaces/api';
import { Issue } from '../interfaces/issue';

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

function oxfordComma(arr: string[]): string {
  if (arr.length === 1) return arr[0];
  const firsts = arr.slice(0, arr.length - 1);
  const last = arr[arr.length - 1];
  return firsts.join(', ') + ' and ' + last;
}

export function mapToIssue(issue: IssueAPIResponse): Issue {
  return {
    meta: {
      number: issue.id,
      title: issue.title,
      desc: issue.description,
      dateOfPublishing: issue.dateOfPublishing,
      imgURL: issue.imgURL,
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
    devOfTheWeek: {
      name: issue.devOfTheWeek.name,
      profileImg: issue.devOfTheWeek.profileImg,
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
      gifURL: issue.gif.gifURL,
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
