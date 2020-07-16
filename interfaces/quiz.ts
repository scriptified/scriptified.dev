export default interface Quiz {
  question: string;
  codeSnippet?: string;
  answerId: number;
}

export interface Option {
  id: number;
  option: string;
  description: string;
}
