import CodeSnippet from './codeSnippet';

export default interface Quiz {
  question: string;
  snippet?: CodeSnippet;
  answerId: number;
}

export interface Option {
  id: number;
  option: string;
  description: string;
}
