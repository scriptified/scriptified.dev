import Author from './author';

export default interface Tool {
  title: string;
  url: string;
  logo: string;
  desc: string;
  authors: Author[];
  tags: string[];
}
