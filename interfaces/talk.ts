import Author from './author';

export default interface Talk {
  authors: Author[];
  desc: string;
  tags: string[];
  talkURL: string;
  title: string;
}
