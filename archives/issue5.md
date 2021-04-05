
![Headshot](https://scriptified.dev/images/issue-5/og.png)

<center>[Read issue on web](https://scriptified.dev/issues/5)</center>

Debug React errors with confidence with right approach to fix them, log multiple variable at once using objects, deep dive into CSS with Ahmad, know the internals of React Virtual DOM, Hooks, etc and design an interactive code presentation with React & JSX.

# Tip of the day
Wrap your variables in a `{}` when you `console.log` , and it would display the names of your variables automatically, by of ES6's "Object literal value property shorthand".

```javascript
const x = 5;
const y = 'scriptified';

console.log('x:', x, 'y:', y)
// -> x: 5 y: scriptified

// A shorter way to write the above log 
// would be 

console.log({ x, y });
// > { x: 5, y: 'scriptified' }
```

___

# Articles

[**How to Read React Errors**](https://daveceddia.com/fix-react-errors/)
	
When working with React you must have got errors like `Cannot read property map of undefined` . In this article Dave discusses how to fix the above error specifically and how you should approach while fixing errors in general.

*by Dave Ceddia*

[**JavaScript Closures**](https://whatthefuck.is/closure)
	
Much of what we can do with JavaScript is the result of the way closures work and they are very critical part of React. Understand how they work with examples in this article with Dan.

*by Dan Abramov*


___

# Tools

[**Omatsuri**](https://omatsuri.app/)
    
A collection of browser tools like SVG to JSX generator, Keyboard events codes, Gradient generator etc. that can ease your life as a web developer.

*by Vitaly Rtishchev*

[**Spectacle**](https://formidable.com/open-source/spectacle/)
    
A React library that lets you build interactive presentation decks with JSX syntax, and allows you to live preview your code.

*by FormidableLabs*


___

# Dev of the Week

<img alt="Ahmad Shadeed" src="/images/issue-5/ahmad-shadeed.jpg" style="width:200px;"/>

## Ahmad Shadeed
Ahmad is an Independent Product Designer and Front End Developer from Palestine. He writes extensively on CSS, Accessibility, and RTL (right to left) text styling. He also published an e-book '[Debugging CSS](https://debuggingcss.com/)' which will help you improve your debugging CSS skills. His [articles on CSS](https://www.ishadeed.com/articles/) are a must read if you want to understand CSS & sharpen your CSS skills.

[Website](https://www.ishadeed.com/) | [GitHub](https://github.com/shadeed) | [Twitter](https://twitter.com/shadeed9)

___

# Tech Talks

[**Deconstructing React**](https://youtu.be/f2mMOiCSj5c)

Explore how the Virtual DOM, Hooks and suspense for data fetching work in React as Tejas deconstructs React and recreates them in this talk.

___

# Quiz

### What will be the value of  `ref.current` on line 13 when the `Cause re-render` button is pressed thrice?

```js
import React, { createRef, useState } from "react";

function App() {
  const [renderIndex, setRenderIndex] = useState(1);
  const ref = createRef();
  if (!ref.current) {
    ref.current = renderIndex;
  }
  return (
    <div className="App">
      Current render index: {renderIndex}
      <br />
      Output from ref: {ref.current}
      <br />
      <button onClick={() => setRenderIndex((prev) => prev + 1)}>
        Cause re-render
      </button>
    </div>
  );
}
```

<a href="https://scriptified.dev/issues/5?section=quiz&option=1" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`1`
</div>
</a>

<a href="https://scriptified.dev/issues/5?section=quiz&option=2" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`3`
</div>
</a>

<a href="https://scriptified.dev/issues/5?section=quiz&option=3" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`2``
</div>
</a>

<a href="https://scriptified.dev/issues/5?section=quiz&option=4" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`setRenderIndex` can only take number as an argument, causing the app to crash when count is incremented because it has been passed a function on Line 15
</div>
</a>



___

# This week in GIF

![When you make a small change in the CSS of your website](https://scriptified.dev/images/issue-4/this-week.gif)

<center>When you make a small change in the CSS of your website</center>

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=Have%20a%20look%20at%20issue%20%235%20of%20Scriptified.%0A%0ASubscribe%20to%20%40scriptified_dev%20for%20more.&url=https%3A%2F%2Fscriptified.dev%2Fissues%2F5) or [read previous issues](https://scriptified.dev/issues).
