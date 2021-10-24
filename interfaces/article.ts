import Author from './author';
export default interface Article {
  title: string;
  url: string;
  desc: string;
  authors: Author[];
  tags: string[];
}
