// This file contains the types of the issue returned from the API
import type { Language } from 'prism-react-renderer';

export interface IssueAPIResponse {
  id: number;
  dateOfPublishing: string;
  title: string;
  description: string;
  imgURL: string;
  tipOfTheWeek: TipOfTheWeek;
  devOfTheWeek: DevOfTheWeek;
  gif: Gif;
  quiz: Quiz;
  published_at: string;
  created_at: string;
  updated_at: string;
  articles: ArticlesEntityOrTalksEntity[];
  tools: ToolsEntity[];
  talks: ArticlesEntityOrTalksEntity[];
}
export interface TipOfTheWeek {
  id: number;
  description: string;
  sourceName: string;
  sourceURL: string;
  title: string;
  issue: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  codeSnippet?: CodeSnippet;
}
export interface CodeSnippet {
  id: number;
  code: string;
  language: Language;
  showLineNumbers: boolean;
}
export interface DevOfTheWeek {
  id: number;
  name: string;
  profileImg: string;
  bio: string;
  website?: string | null;
  twitter?: string | null;
  github?: string | null;
  youtube?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
  issue: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}
export interface Gif {
  id: number;
  gifURL: string;
  caption: string;
  issue: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}
export interface Quiz {
  id: number;
  question: string;
  answerId: number;
  issue: number;
  published_at: string;
  created_at: string;
  updated_at: string;
  Option: OptionEntity[];
  CodeSnippet: CodeSnippet;
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
  published_at: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  tags: TagsEntity[];
  authors: AuthorsEntity[];
}
export interface TagsEntity {
  id: number;
  name: string;
  published_at: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}
export interface AuthorsEntity {
  id: number;
  Name: string;
  Website: string;
  published_at: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}
export interface ToolsEntity {
  id: number;
  name: string;
  url: string;
  logo: string;
  description: string;
  issue: number;
  published_at: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  authors: AuthorsEntity[];
  tags: TagsEntity[];
}
