
![Headshot](https://scriptified.dev/images/issue-3/og.png)

<center>[Read issue on web](https://scriptified.dev/issues/3)</center>

Find out how event loops in JavaScript work, how React.useRef works and how it is different yet similar to React.useState, are Styled Components actually worth it and grease your React skills with an interesting quiz.

# Tip of the day
You can use placeholder commas in the beginning to skip elements while [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) an array. For instance you want to create a new array skipping the first two elements of another array, you can do it like this - 

```javascript
const superheroes = ['Hawkeye', 'Black widow', 'Thor', 'Wanda', 'Hulk', 'Iron man'];
const [, , ...awesomeHeroes] = superheroes;

console.log(awesomeHeroes);
// > ['Thor', 'Wanda', 'Hulk', 'Iron man'];
```

___

# Articles

[**Why I moved from styled-components to Tailwind CSS and what's the future of CSS-in-JS?**](https://daily.dev/blog/why-i-moved-from-styled-components-to-tailwind-css-and-whats-the-future-of-css-in-js)
	
Explore with Ido why he had to migrate from using styled-components to Tailwind CSS for [daily.dev](https://daily.dev) despite him considering the former as having a better DX, and what does the future hold for such CSS-in-JS libraries. Fun fact - Scriptified is also built with Tailwind CSS.

*by Ido Shamun*

[**The Complete Guide to useRef() and Refs in React**](https://dmitripavlutin.com/react-useref-guide/)
	
In this guide, Dmitri explains how `React.useRef` works, how it is different from `React.useState` and the use cases where `useRef` can come in handy with examples.

*by Dmitri Pavlutin*


___

# Tools

[**react-laag**](https://www.react-laag.com/)
    
It is a simple and ligthweight library, that provides hooks for tooltip and popovers. It also gives you a really comprehensive API which gives you full control over the look and feel.

*by Erik Verweij*

[**Phosphor Icons**](https://phosphoricons.com/)
    
A free and open-source icon family for interfaces, diagrams and presentations. Easy to pick up and plug in. Truly consistent in style and scale. Flexible to multiple sizes and weights.

*by Helena Zhang, Toby Fried*


___

# Dev of the Week

<img alt="Neha Sharma" src="/images/issue-3/dev-of-week.jpeg" style="width:200px;"/>

## Neha Sharma
Neha has 10+ years of experience in Front-end domain & currently working as Software development Manager at Tesco. She is an active speaker & advocate of web accessibility and have given several [talks](https://a11ytips.dev/talks/) at meetups & conferences on accessibility. She also founded [JSLovers](https://twitter.com/jslovers_del) dev community & writes about accessibility at [a11ytips.dev](https://a11ytips.dev/).

[Website](https://a11ytips.dev/about/) | [GitHub](https://github.com/neha) | [Twitter](https://twitter.com/hellonehha) | [LinkedIn](https://www.linkedin.com/in/nehha/)

___

# Tech Talks

[**What the heck is the event loop anyway?**](https://youtu.be/8aGhZQkoFbQ)

With some handy visualisations, and fun hacks, let’s get an intuitive understanding of what happens when JavaScript runs in this fantastinc talk by Philip Roberts.

___

# Quiz

### What is wrong with the below code snippet?

```jsx
// Assume this is some heavy component with some heavy tree
// Hence this component is memoized to avoid unnecessary re-renders
const SomeHeavyComponent = React.memo(
  ({ children }) => <div>{children}</div>
);

const SomeComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <SomeHeavyComponent>
        <span>Header</span>
      </SomeHeavyComponent>

      Count: {count}

      <button 
        type="button" 
        onClick={() => setCount(currentCount => currentCount + 1)}
      >
        Increment count
      </button>
    </div>
  );
};
```

<a href="https://scriptified.dev/issues/3?section=quiz&option=1" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`setCount` can only take number as an argument, causing the app to crash when count is incremented because it has been passed a function on Line 19
</div>
</a>

<a href="https://scriptified.dev/issues/3?section=quiz&option=2" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	The `SomeHeavyComponent` expects a `children={something}` prop which is missing on Line 11
</div>
</a>

<a href="https://scriptified.dev/issues/3?section=quiz&option=3" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	The `SomeHeavyComponent` won't be memoized because we need to pass `React.memo` a dependency array similar to the memoization hooks like `useMemo` and `useCallback`.
</div>
</a>

<a href="https://scriptified.dev/issues/3?section=quiz&option=4" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	The `SomeHeavyComponent` won't be memoized because `children` prop is new on every render of `SomeComponent`
</div>
</a>



___

# This week in GIF

![When you ship to production without testing first](https://scriptified.dev/images/issue-3/this-week.gif)

<center>When you ship to production without testing first</center>

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=Have%20a%20look%20at%20issue%20%233%20of%20Scriptified.%0A%0ASubscribe%20to%20%40scriptified_dev%20for%20more.&url=https%3A%2F%2Fscriptified.dev%2Fissues%2F3) or [read previous issues](https://scriptified.dev/issues).
