import Author from './author';
import CodeSnippet from './codeSnippet';

export default interface TipOfTheWeek {
  snippet?: CodeSnippet;
  desc: string;
  authors: Author[];
}
