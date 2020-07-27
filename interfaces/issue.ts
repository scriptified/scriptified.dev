import TipOfTheWeek from './tipOfTheWeek';
import Article from './article';
import DevOfTheWeek from './devOfTheWeek';
import Talk from './talk';
import Website from './website';
import Gif from './gif';
import Meta from './meta';
import Quiz from './quiz';

export interface Issue {
  tipOfTheWeek: TipOfTheWeek;
  articles?: Article[] | null;
  tools?: Article[] | null;
  spotTheBug: string;
  devOfTheWeek: DevOfTheWeek;
  talks?: Talk[] | null;
  website: Website;
  gif: Gif;
  meta: Meta;
  quiz: Quiz;
}
