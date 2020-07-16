/* eslint-disable max-len */
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
);`,
      desc:
        "There's no point in wrapping your component with React.memo if it accepts a children prop. Why? Because the children prop changes on every render.",
      sourceName: 'Google',
      sourceURL: 'https://google.com',
      tags: ['React'],
    },

    articles: [
      {
        title: 'The Most Complete Spreadsheet for JavaScript Apps – SpreadJS :',
        url: 'https://www.grapecity.com/spreadjs',
        desc:
          'Deliver true Excel-like experiences with this fast JavaScript enterprise spreadsheet solution. Build FinTech, analysis, budgeting, and forecasting apps. Featuring an Excel I/O, 450+ functions, tables, charts, sparklines, and more.',
        author: 'Microsoft',
        tags: ['JavaScript'],
      },
      {
        title: 'The Most Complete Spreadsheet for JavaScript Apps – SpreadJS :',
        url: 'https://www.github.com',
        desc:
          'Deliver true Excel-like experiences with this fast JavaScript enterprise spreadsheet solution. Build FinTech, analysis, budgeting, and forecasting apps. Featuring an Excel I/O, 450+ functions, tables, charts, sparklines, and more.',
        author: 'Microsoft',
        tags: ['JavaScript'],
      },
    ],

    tools: [
      {
        title: 'The Most Complete Spreadsheet for JavaScript Apps – SpreadJS :',
        url: 'https://www.grapecity.com/spreadjs',
        desc:
          'Deliver true Excel-like experiences with this fast JavaScript enterprise spreadsheet solution. Build FinTech, analysis, budgeting, and forecasting apps. Featuring an Excel I/O, 450+ functions, tables, charts, sparklines, and more.',
        author: 'Microsoft',
        tags: ['JavaScript'],
      },
    ],

    quiz: {
      question: 'Which one is true?',
      codeSnippet: `const bird = {
        size: 'small',
      };
      
      const mouse = {
        name: 'Mickey',
        small: true,
      };`,
      options: [
        {
          id: 1,
          option: '`mouse.bird.size` is not valid',
          description: 'Describe why this option is correct',
        },
        {
          id: 2,
          option: '`mouse[bird.size]` is not valid',
          description: 'Describe why this option is incorrect',
        },
        {
          id: 3,
          option: '`mouse[bird["size"]]` is not valid',
          description: 'Describe why this option is incorrect',
        },
        {
          id: 4,
          option: 'All of them are valid',
          description: 'Describe why this option is incorrect',
        },
      ],
      answerId: 1,
    },

    // devTip by devOfTheWeek
    // you can extract any github user's profile image by this link - https://github.com/user-name.png

    devOfTheWeek: {
      name: 'Ayush Gupta',
      profileImg: 'https://github.com/gupta-ji6.png',
      profileLink: {
        website: 'https://ayushgupta.tech',
        github: 'https://github.com/gupta-ji6',
        instagram: 'https:/instagram.com/_.guptaji._',
      },
      bio: 'React Native Developer at FirstCry. Mobile and Web App Developer, Blogger, Amateur Photographer.',
    },

    talks: [
      {
        talkURL: 'https://www.youtube.com/watch?v=mHxAvSs914g',
        title: 'Aweomse workshop',
        desc: 'Awsome description',
        tags: ['React', 'Redux'],
      },
    ],

    website: {
      name: 'Github',
      URL: 'https://github.com',
      desc: 'Home for Devlopers',
    },

    gif: {
      gifURL: 'https://media.giphy.com/media/jR4w2XT7CAiVsNVvuD/giphy.gif',
      caption: 'a caption',
    },

    meta: {
      number: 1,
      dateOfPublishing: '2019-07-15',
      title: '#1',
      desc: 'some random description',
      imgURL: 'https://avatars3.githubusercontent.com/u/21218732?s=460&u=bd9c8289d8c528e6b7358d5404a7028c849aa700&v=4',
    },
  },
];
