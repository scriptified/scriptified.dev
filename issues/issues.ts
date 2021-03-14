/* eslint-disable max-len */
export default [
  {
    tipOfTheWeek: {
      snippet: {
        code: `let dirtyArray = [1, 1, 3, 4, 5, 3, 4, 2];
let uniqueArray = Array.from(new Set(dirtyArray));
        
console.log(uniqueArray)
// >> [1, 3, 4, 5, 2]`,
        language: 'js',
      },
      desc:
        'Getting unique values from an array required the [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method with the combination of something like [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) to find whether the value already exists or not. But with the new [native Set object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) this is super clean and easy:',
      sourceName: 'Google',
      sourceURL: 'https://google.com',
      tags: ['React'],
    },

    articles: [
      {
        title: 'The styled-components happy path',
        url: 'https://www.joshwcomeau.com/css/styled-components/',
        desc:
          "Most developers don't fully embrace the power of styled-components, and start working on a project without updating their mental models around styling. This aritcle would explain how you could get most out of it.",
        author: 'Josh W. Comeau',
        tags: ['React', 'Styled Components'],
      },
      {
        title: 'What is React: A Visual Introduction For Beginners',
        url: 'https://learnreact.design/posts/what-is-react',
        desc:
          "This article is an introduction to React for beginners, and provides a bird's eye view with an interactive hands-on experience of writing an actual React component. It should probably be the first post that you should go through before getting familiar with its APIs.",
        author: 'Linton Ye',
        tags: ['React'],
      },
    ],

    tools: [
      {
        title: 'react-hot-toast',
        url: 'https://react-hot-toast.com/',
        logo: '/images/issue-1/react-hot-toast.jpg',
        desc:
          'A sleek library provides a ligthweight, customizable and accessible API for adding beautiful toasts to your app.',
        author: 'Timo Lins',
        tags: ['React', 'css'],
      },
      {
        title: 'Import Cost',
        url: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
        logo: '/images/issue-1/import-cost.jpg',
        desc:
          'If you care about the bundle size of your libraries, then this VSCode extension can make your life a hell lot easier. This extension will display inline in the editor the size of the imported package. The extension utilizes webpack with babili-webpack-plugin in order to detect the imported size.',
        author: 'Wix.com',
        tags: ['optimization', 'webpack', 'javascript'],
      },
    ],

    quiz: {
      question: 'What is the output of the below snippet?',
      snippet: {
        code: `const numbers = [22,8,19,32,98];
numbers.sort();
        
console.log(numbers[3])`,
        language: 'js',
      },
      options: [
        {
          id: 1,
          text: '8',
          description:
            'Bingo! By default sort method sorts the array in [ascending order with the items casted to strings](https://www.digitalocean.com/community/tutorials/js-array-sort-numbers)',
        },
        {
          id: 2,
          text: '22',
          description: "Okay maybe you're onto something! Keep trying",
        },
        {
          id: 3,
          text: '32',
          description: 'Come on did you really think it would be that obvious :)',
        },
        {
          id: 4,
          text: '`Reference Error`',
          description: "Now we both know you're just trying to mess with the options here",
        },
      ],
      answerId: 1,
    },

    // devTip by devOfTheWeek
    // you can extract any github user's profile image by this link - https://github.com/user-name.png

    devOfTheWeek: {
      name: 'Vilva Athiban P B',
      profileImg: 'https://github.com/vilvaathibanpb.png',
      profileLink: {
        website: 'https://vilvaathiban.com/',
        github: 'https://github.com/vilvaathibanpb',
        youtube: 'https://www.youtube.com/channel/UCFSQ3m4-hJ0izfsMUrAk7mw',
        linkedin: 'https://www.linkedin.com/in/vilvaathiban/',
      },
      bio:
        'Vilva is a JavaScript developer, International tech Speaker, Open Source Contributor, Seasonal Blogger and YouTuber. He recently started a YouTube video series called PathToExpert, where he posts a daily video which covers advanced content, easy tips and tricks, related to Frontend Development that can help developers to become experts in a year.',
    },

    talks: [
      {
        talkURL: 'https://www.youtube.com/watch?v=yhF7OmuIILc',
        title: 'The Art of Code Comments - Sarah Drasner | JSConf Hawaii 2020',
        desc:
          'Code can describe how, but it cannot explain why. This talk digs into some of the many beneficial types of comments that might all serve a different purpose, followed by patterns you might want to avoid.',
        tags: ['Best Practices'],
      },
    ],

    website: {
      name: 'Github',
      URL: 'https://github.com',
      desc: 'Home for Devlopers',
    },

    gif: {
      gifURL: '/images/issue-1/this-week.gif',
      caption: 'when your code works on every machine, not only yours!',
    },

    meta: {
      number: 1,
      dateOfPublishing: '2021-03-06',
      title: 'Toasts, Styled Components and Writing Legible Code Comments',
      desc:
        'Learn the mental model you need for styled-components, how JavaScript sets can help you, display beautiful toasts, improve code comments, and do you really understand the sort method.',
      imgURL: 'https://scriptified.dev/images/issue-1/issue-page-og.jpg',
    },
  },
  {
    tipOfTheWeek: {
      snippet: {
        code: `<head>
  <base href="https://scriptified.dev" target="_blank">
</head>
...
<!-- This link will automatically be opened in a new tab -->
<a href="issue/2">Scriptified Issue #2</a>`,
        language: 'html',
      },
      desc:
        'You can open all links in a document in a new tab without adding `target=_blank` to every link with the [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) element. You can also specify a base path using the `href` atrribute which will be used for all the relative URLs.',
      sourceName: 'Google',
      sourceURL: 'https://google.com',
      tags: ['HTML'],
    },

    articles: [
      {
        title: 'Before you memo()',
        url: 'https://overreacted.io/before-you-memo/',
        desc:
          'You must have used `React.memo` or the memoization hooks like `useCallback` and friends for improving the performance of your components, but do you know there are much simpler ways by which you can optimize for performance without using any memoization.',
        author: 'Dan Abramov',
        tags: ['React', 'Optimization'],
      },
      {
        title: 'Using fetch with TypeScript',
        url: 'https://kentcdodds.com/blog/using-fetch-with-type-script',
        desc:
          'Migrating existing JavaScript files to TypeScript can sometimes be a pain in the ass, especially when they include network requests. In this article, Kent converts a JavaScript file with network requests using fetch to TypeScript, step by step discussing some practices you can follow while migrating.',
        author: 'Kent C. Dodds',
        tags: ['React', 'TypeScript'],
      },
    ],

    tools: [
      {
        title: 'Meta Tags',
        url: 'https://metatags.io/',
        logo: '/images/issue-2/meta-tags.svg',
        desc:
          'A one-click meta-tags generator with previews for Google, Facebook, Twitter, LinkedIn, Pinterest and Slack.',
        author: 'Meta tags',
        tags: ['SEO'],
      },
      {
        title: 'Remotion',
        url: 'https://remotion.dev',
        logo: '/images/issue-2/remotion.png',
        desc:
          'Use the magic of CSS, SVGs and WebGL to create professionally designed videos with React 17 and TypeScript. It also allows you to preview your the video in the browser with fast refresh and Timelines for frames.',
        author: 'Jonny Burger',
        tags: ['React'],
      },
    ],

    quiz: {
      question: 'What is the output of the below snippet?',
      snippet: {
        code: `const w = 12;
const x = "undefined";
const y = null;
const z = { name: "scriptified" };

const answer = w && x && y && z;

console.log(answer);`,
        language: 'js',
      },
      options: [
        {
          id: 1,
          text: '`false`',
          description:
            "Although the answer is a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value but it is not false, hope that's a good enough hint for you ;)",
        },
        {
          id: 2,
          text: '`{ name: "scriptified" }`',
          description:
            'We think you should read [falsy values in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) and then try again!',
        },
        {
          id: 3,
          text: '12',
          description:
            'Have a look at [short circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation) in JavaScript and then try again!',
        },
        {
          id: 4,
          text: '`null`',
          description:
            'Voila! This is an example of [short circuit evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation) with [logical AND operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND). It evaluated from left to right and if the first expression is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) then it moves to the next one, and it keeps doing this until it either finishes in which it returns the last value or reaches a falsy value and returns that instead (null is that falsy value in our case)',
        },
      ],
      answerId: 4,
    },

    // devTip by devOfTheWeek
    // you can extract any github user's profile image by this link - https://github.com/user-name.png

    devOfTheWeek: {
      name: 'Ameer Jhan',
      profileImg: 'https://github.com/ameerthehacker.png',
      profileLink: {
        website: 'https://ameerthehacker.me/',
        github: 'https://github.com/ameerthehacker',
        twitter: 'https://twitter.com/ameerthehacker',
      },
      bio:
        'Ameer is a speaker, writer, AWS Solution Architect who has authored & contributed in several popular open source projects like styled-wind & react-lazyload. He recently launched [Blazepack](https://github.com/ameerthehacker/blazepack) -  a super fast dev server powered by CodeSandbox sandpack bundler, which is catching a lot of eyes.',
    },

    talks: [
      {
        talkURL: 'https://www.youtube.com/watch?v=u2WtILkz0fI',
        title: 'Navigating the Hype Driven Frontend Development World',
        desc:
          "The obsession to always move on to the latest and greatest, and the fear of missing out while working with something that's older than a few months is currently dominating the dev world. Checkout how Kitze demonstrates everyone's struggles with the hype driven frontend development.",
        tags: ['Frontend'],
      },
    ],

    website: {
      name: 'Github',
      URL: 'https://github.com',
      desc: 'Home for Devlopers',
    },

    gif: {
      gifURL: '/images/issue-2/this-week.gif',
      caption:
        'When you try to debug your code in production! (via [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/comments/m4299h/when_you_debug_in_production/))',
    },

    meta: {
      number: 2,
      dateOfPublishing: '2021-03-14',
      title: 'Creating videos with React, Fetching with TypeScript and the Hype Driven Frontend Development',
      desc:
        'Explore how to create professional videos with React, optimize your React code without using memo, handle data fetching with TypeScript and open all links in new tabs with bare minimum code.',
      imgURL: 'https://scriptified.dev/images/issue-2/issue-page-og.jpg',
    },
  },
];
