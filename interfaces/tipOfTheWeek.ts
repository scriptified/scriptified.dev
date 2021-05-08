import CodeSnippet from './codeSnippet';

export default interface TipOfTheWeek {
  snippet: CodeSnippet;
  desc: string;
  sourceName: string;
  sourceURL: string;
}
