export default [
  {
    tipOfTheWeek: {
      snippet: `const Header = ({ children }) => (
                <div>
                 {children}
                </div>
             );
             
             const UselessMemoizedHeader = React.memo(Header);
             
             const SomeComponent = () => (
                <div>
                  <UselessMemoizedHeader>
                     <SomeOtherComponent/>
                  </UselessMemoizedHeader>
                <div>
             `,
      desc:
        "There's no point in wrapping your component with React.memo if it accepts a children prop. Why? Because the children prop changes on every render.",
      source: 'https://google.com',
    },

    articles: [
      {
        title: 'The Most Complete Spreadsheet for JavaScript Apps – SpreadJS :',
        url:
          'https://www.grapecity.com/spreadjs?utm_source=JavaScriptWeekly&utm_medium=paid&utm_campaign=CooperPress_sponsorship_05/22/20',
        desc:
          'Deliver true Excel-like experiences with this fast JavaScript enterprise spreadsheet solution. Build FinTech, analysis, budgeting, and forecasting apps. Featuring an Excel I/O, 450+ functions, tables, charts, sparklines, and more.',
        author: 'Microsoft',
      },
    ],

    tools: [
      {
        title: 'The Most Complete Spreadsheet for JavaScript Apps – SpreadJS :',
        url:
          'https://www.grapecity.com/spreadjs?utm_source=JavaScriptWeekly&utm_medium=paid&utm_campaign=CooperPress_sponsorship_05/22/20',
        desc:
          'Deliver true Excel-like experiences with this fast JavaScript enterprise spreadsheet solution. Build FinTech, analysis, budgeting, and forecasting apps. Featuring an Excel I/O, 450+ functions, tables, charts, sparklines, and more.',
        author: 'Microsoft',
      },
    ],

    spotTheBug: '', // Not sure how to proceed with it yet, can think about it later,

    devOfTheWeek: {
      name: 'GuptaJI',
      profileImg:
        'https://avatars3.githubusercontent.com/u/21218732?s=460&u=bd9c8289d8c528e6b7358d5404a7028c849aa700&v=4',
      profileLink: 'https://github.com/gupta-ji6',
      bio: 'React Native Developer at FirstCry. Mobile and Web App Developer, Blogger, Amateur Photographer.',
    },

    talks: [
      {
        youTubeURL: 'https://www.youtube.com/watch?v=mHxAvSs914g',
        title: 'Aweomse workshop',
        desc: 'Awsome description',
      },
    ],

    website: {
      name: 'Github',
      URL: 'https://github.com',
      desc: 'Home for Devlopers',
    },

    gif: 'https://media.giphy.com/media/jR4w2XT7CAiVsNVvuD/giphy.gif',

    meta: {
      number: 1,
      title: 'New issue',
      desc: 'some random description',
      imgURL: 'https://avatars3.githubusercontent.com/u/21218732?s=460&u=bd9c8289d8c528e6b7358d5404a7028c849aa700&v=4',
    },
  },
];

export interface Issue {
  tipOfTheWeek: TipOfTheWeek;
  articles?: Article[] | null;
  tools?: Article[] | null;
  spotTheBug: string;
  devOfTheWeek: DevOfTheWeek;
  talks?: Talk[] | null;
  website: Website;
  gif: string;
  meta: Meta;
}
export interface TipOfTheWeek {
  snippet: string;
  desc: string;
  source: string;
}
export interface Article {
  title: string;
  url: string;
  desc: string;
  author: string;
}
export interface DevOfTheWeek {
  name: string;
  profileImg: string;
  profileLink: string;
  bio: string;
}
export interface Talk {
  youTubeURL: string;
  title: string;
  desc: string;
}
export interface Website {
  name: string;
  URL: string;
  desc: string;
}
export interface Meta {
  number: number;
  title: string;
  desc: string;
  imgURL: string;
}
