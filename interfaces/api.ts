// This file contains the types of the issue returned from the API
import type { Language } from 'prism-react-renderer';

export interface IssueAPIResponse {
  id: number;
  date: string;
  title: string;
  description: string;
  imgURL: string;
  tip_of_the_week: TipOfTheWeek;
  dev_of_the_week: DevOfTheWeek;
  gif: Gif;
  quiz: Quiz;
  articles: ArticlesEntityOrTalksEntity[];
  tools: ToolsEntity[];
  talks: ArticlesEntityOrTalksEntity[];
}
export interface TipOfTheWeek {
  description: string;
  sourceName: string;
  sourceURL: string;
  title: string;
  issue: number;
  codeSnippet?: CodeSnippet;
}
export interface CodeSnippet {
  code: { code: string };
  language: Language;
  showLineNumbers: boolean;
}
export interface DevOfTheWeek {
  name: string;
  profileImg: string;
  bio: string;
  website?: string | null;
  twitter?: string | null;
  github?: string | null;
  youtube?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
}
export interface Gif {
  gifURL: string;
  caption: string;
}
export interface Quiz {
  id: number;
  question: string;
  answerId: number;
  issue: number;
  options: OptionEntity[];
  codeSnippet: CodeSnippet;
}
export interface OptionEntity {
  id: number;
  text: string;
  description: string;
  option_id: number;
}
export interface ArticlesEntityOrTalksEntity {
  id: number;
  title: string;
  url: string;
  description: string;
  issue: number;
  tags: Array<string>;
  authors: Array<string>;
}
export interface ToolsEntity {
  id: number;
  name: string;
  url: string;
  logo?: string | null;
  description: string;
  authors: Array<string>;
  tags: Array<string>;
}
