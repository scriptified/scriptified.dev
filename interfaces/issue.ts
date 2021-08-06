import Article from './article';
import DevOfTheWeek from './devOfTheWeek';
import Gif from './gif';
import Meta from './meta';
import Talk from './talk';
import TipOfTheWeek from './tipOfTheWeek';
import Tool from './tool';
import Quiz from './quiz';

export interface Issue {
  tipOfTheWeek: TipOfTheWeek | null;
  articles?: Article[] | null;
  tools?: Tool[] | null;
  devOfTheWeek: DevOfTheWeek | null;
  talks?: Talk[] | null;
  gif: Gif | null;
  meta: Meta;
  quiz: Quiz | null;
}
