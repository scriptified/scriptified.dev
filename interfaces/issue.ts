import Article from './article';
import DevOfTheWeek from './devOfTheWeek';
import Gif from './gif';
import Meta from './meta';
import Talk from './talk';
import TipOfTheWeek from './tipOfTheWeek';
import Tool from './tool';
import Website from './website';

export interface Issue {
  tipOfTheWeek: TipOfTheWeek;
  articles?: Article[] | null;
  tools?: Tool[] | null;
  spotTheBug: string;
  devOfTheWeek: DevOfTheWeek;
  talks?: Talk[] | null;
  website: Website;
  gif: Gif;
  meta: Meta;
}
