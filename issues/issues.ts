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
      dateOfPublishing: '2021-02-19',
      title: 'Toasts, Styled Components and Writing Legible Code Comments',
      desc:
        'Learn the mental model you need for styled-components, how JavaScript sets can help you, display beautiful toasts, improve code comments, and do you really understand the sort method.',
      imgURL: 'https://scriptified.dev/images/issue-page-og.jpg',
    },
  },
];
