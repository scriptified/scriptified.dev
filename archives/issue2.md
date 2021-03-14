![Headshot](https://scriptified.dev/images/issue-2/og.png)

<center>[Read issue on web](https://scriptified.dev/issues/2)</center>

Explore how to create professional videos with React, optimize your React code without using memo, handle data fetching with TypeScript and open all links in new tabs with bare minimum code.

# Tip of the day
You can open all links in a document in a new tab without adding `target=_blank` to every link with the [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) element. You can also specify a base path using the `href` atrribute which will be used for all the relative URLs.

```html
<head>
  <base href="https://scriptified.dev" target="_blank">
</head>
...
<!-- This link will automatically be opened in a new tab -->
<a href="issue/2">Scriptified Issue #2</a>
```

___

# Articles

[**Before you memo()**](https://overreacted.io/before-you-memo/)
	
You must have used `React.memo` or the memoization hooks like `useCallback` and friends for improving the performance of your components, but do you know there are much simpler ways by which you can optimize for performance without using any memoization.

*by Dan Abramov*

[**Using fetch with TypeScript**](https://kentcdodds.com/blog/using-fetch-with-type-script)
	
Migrating existing JavaScript files to TypeScript can sometimes be a pain in the ass, especially when they include network requests. In this article, Kent converts a JavaScript file with network requests using fetch to TypeScript, step by step discussing some practices you can follow while migrating.

*by Kent C. Dodds*


___

# Tools

[**Meta Tags**](https://metatags.io/)
    
A one-click meta-tags generator with previews for Google, Facebook, Twitter, LinkedIn, Pinterest and Slack.

*by Meta tags*

[**Remotion**](https://remotion.dev)
    
Use the magic of CSS, SVGs and WebGL to create professionally designed videos with React 17 and TypeScript. It also allows you to preview your the video in the browser with fast refresh and Timelines for frames.

*by Jonny Burger*


___

# Dev of the Week

<img alt="Ameer Jhan" src="https://github.com/ameerthehacker.png" style="width:200px;"/>

## Ameer Jhan
Ameer is a speaker, writer, AWS Solution Architect who has authored & contributed in several popular open source projects like styled-wind & react-lazyload. He recently launched [Blazepack](https://github.com/ameerthehacker/blazepack) -  a super fast dev server powered by CodeSandbox sandpack bundler, which is catching a lot of eyes.

[Website](https://ameerthehacker.me/) | [GitHub](https://github.com/ameerthehacker) | [Twitter](https://twitter.com/ameerthehacker)

___

# Tech Talks

[**Navigating the Hype Driven Frontend Development World**](https://www.youtube.com/watch?v=u2WtILkz0fI)

The obsession to always move on to the latest and greatest, and the fear of missing out while working with something that's older than a few months is currently dominating the dev world. Checkout how Kitze demonstrates everyone's struggles with the hype driven frontend development.

___

# Quiz

### What is the output of the below snippet?

```js
const w = 12;
const x = "undefined";
const y = null;
const z = { name: "scriptified" };

const answer = w && x && y && z;

console.log(answer);
```

<a href="https://scriptified.dev/issues/2?section=quiz&option=1" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`false`
</div>
</a>

<a href="https://scriptified.dev/issues/2?section=quiz&option=2" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`{ name: "scriptified" }`
</div>
</a>

<a href="https://scriptified.dev/issues/2?section=quiz&option=3" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	12
</div>
</a>

<a href="https://scriptified.dev/issues/2?section=quiz&option=4" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`null`
</div>
</a>

___

# This week in GIF

![When you try to debug your code in production! (via [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/comments/m4299h/when_you_debug_in_production/))](https://scriptified.dev/images/issue-2/this-week.gif)

<center>When you try to debug your code in production! (via [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/comments/m4299h/when_you_debug_in_production/))</center>

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=Have%20a%20look%20at%20issue%20%232%20of%20Scriptified.%0A%0ASubscribe%20to%20%40scriptified_dev%20for%20more.&url=https%3A%2F%2Fscriptified.dev%2Fissues%2F2) or [read previous issues](https://scriptified.dev/issues).
