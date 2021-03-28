
![Headshot](https://scriptified.dev/images/issue-4/og.png)

<center>[Read issue on web](https://scriptified.dev/issues/4)</center>

Understand how z-index works with stacking contexts, when you should choose Svelte over React, how React Query can help you manage asynchronous data and optimize your global state and check if you understand hoisting with this week's quiz.

# Tip of the day
If you want to test some DOM element from the browser console and you need `document.querySelectorAll` for it, you can use the handy `$$` shorthand specifically available only on DevTools.

```javascript
// In Dev tools
$$('a')

//... is equivalent to:
Array.from(document.querySelectorAll('a'))
```

___

# Articles

[**What the heck, z-index??**](https://www.joshwcomeau.com/css/stacking-contexts/)
	
Have you ever been in a situation where you applied a ridiculously high z-index to an element but it still doesn't appear where you want it to be, well you're not alone. In this article Josh explores stacking contexts and explains with examples how it affects the z-index of your elements.

*by Josh W. Comeau*

[**Comparing Svelte and React**](https://www.jackfranklin.co.uk/blog/comparing-svelte-and-react-javascript/)
	
Explore with Jack how he migrated his [pomodone](https://pomod.one/) app from React to Svelte, and explains the similarities and differences between both libraries with real-world examples from his app.

*by Jack Franklin*


___

# Tools

[**Jitter**](https://jitter.video)
    
Create rich animations for your design from your browser, with a UI as simple as creating a presentation in PowerPoint or Keynote

*by SÉBASTIEN ROBASZKIEWICZ*

[**SVG Repo**](https://svgrepo.com)
    
A huge repository of free SVG icons (over 300.000 icons), with a good search and filters.

*by SVG Repo*


___

# Dev of the Week

<img alt="Santosh Yadav" src="https://scriptified.dev/images/issue-4/santosh.jpeg" style="width:200px;"/>

## Santosh Yadav
Santosh is a GDE for Angular, [GitHub Star](https://stars.github.com/profiles/santoshyadavdev/), and an Auth0 Ambassador, he loves contributing to Angular and NgRx. He works as a software consultant and writes for [indepth.dev](https://indepth.dev). He is also the author of the Ngx-Builders package and part of NestJsAddOns core Team. He is also running Tech Talks with Santosh talk show, where he invites the industry experts to discuss different technologies.

[Website](https://www.santoshyadav.dev/home) | [GitHub](https://github.com/santoshyadavdev) | [Twitter](https://twitter.com/SantoshYadavDev) | [YouTube](https://www.youtube.com/channel/UChvYTafHRgXKb0VbYGeG0nw)

___

# Tech Talks

[**React Query: It’s Time to Break up with your "Global State”! **](https://www.youtube.com/watch?v=seU46c6Jz7E)

An increasing amount of data in our React applications is coming from remote and asynchronous sources and, even worse, continues to masquerade as “global state”. In this talk, you’ll get the lowdown on why most of your “global state” isn’t really state at all and how React Query can help you fetch, cache and manage your asynchronous data with a fraction of the effort and code that you’re used to

___

# Quiz

### What will be the output of the below snippet?

```js
helloScriptified();

function helloScriptified() {
  console.log(message);
  var message = 'Welcome to issue #4 of Scriptified';
}
```

<a href="https://scriptified.dev/issues/4?section=quiz&option=1" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`ReferenceError: helloScriptified is not defined`
</div>
</a>

<a href="https://scriptified.dev/issues/4?section=quiz&option=2" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`undefined`
</div>
</a>

<a href="https://scriptified.dev/issues/4?section=quiz&option=3" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	Welcome to issue #4 of Scriptified
</div>
</a>

<a href="https://scriptified.dev/issues/4?section=quiz&option=4" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`ReferenceError: message is not defined`
</div>
</a>



___

# This week in GIF

![When you make a small change in the CSS of your website](https://scriptified.dev/images/issue-4/this-week.gif)

<center>When you make a small change in the CSS of your website</center>

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=Have%20a%20look%20at%20issue%20%234%20of%20Scriptified.%0A%0ASubscribe%20to%20%40scriptified_dev%20for%20more.&url=https%3A%2F%2Fscriptified.dev%2Fissues%2F4) or [read previous issues](https://scriptified.dev/issues).
