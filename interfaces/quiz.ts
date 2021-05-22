import CodeSnippet from './codeSnippet';

export default interface Quiz {
  question: string;
  snippet?: CodeSnippet;
  answerId: number;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
  description: string;
}
