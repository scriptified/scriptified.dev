![ Headshot](https://scriptified.dev/images/issue-page-og.jpg)

<center>[Read issue on web](https://scriptified.dev/issues/1)</center>

Learn the mental model you need for styled-components, how JavaScript sets can help you, display beautiful toasts, improve code comments, and do you really understand the sort method.

# Tip of the day
Getting unique values from an array required the [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method with the combination of something like [`includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) to find whether the value already exists or not. But with the new [native Set object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) this is super clean and easy:

```js
let dirtyArray = [1, 1, 3, 4, 5, 3, 4, 2];
let uniqueArray = Array.from(new Set(dirtyArray));
        
console.log(uniqueArray)
// >> [1, 3, 4, 5, 2]
```

___

# Articles

[**The styled-components happy path**](https://www.joshwcomeau.com/css/styled-components/)
	
Most developers don't fully embrace the power of styled-components, and start working on a project without updating their mental models around styling. This aritcle would explain how you could get most out of it.

*by Josh W. Comeau*

[**What is React: A Visual Introduction For Beginners**](https://learnreact.design/posts/what-is-react)

This article is an introduction to React for beginners, and provides a bird's eye view with an interactive hands-on experience of writing an actual React component. It should probably be the first post that you should go through before getting familiar with its APIs

*by Linton Ye*
___

# Tools

[**react-hot-toast**](https://react-hot-toast.com/)

A sleek library provides a ligthweight, customizable and accessible API for adding beautiful toasts to your app.

*by Timo Lins*

[**Import Cost**](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

If you care about the bundle size of your libraries, then this VSCode extension can make your life a hell lot easier. This extension will display inline in the editor the size of the imported package. The extension utilizes webpack with babili-webpack-plugin in order to detect the imported size.

*by Wix*

___

# Dev of the Week
<img alt="Vilva Athiban P B" src="https://github.com/vilvaathibanpb.png" style="width:200px;"/>

## Vilva Athiban P B
Vilva is a JavaScript developer, International tech Speaker, Open Source Contributor, Seasonal Blogger and YouTuber. He recently started a YouTube video series called PathToExpert, where he posts a daily video which covers advanced content, easy tips and tricks, related to Frontend Development that can help developers to become experts in a year.

[Website](https://vilvaathiban.com) | [GitHub](https://github.com/vilvaathibanpb) | [YouTube](https://www.youtube.com/channel/UCFSQ3m4-hJ0izfsMUrAk7mw) | [Twitter](https://twitter.com/vilvaathibanpb)

___
# Tech Talks

[**The Art of Code Comments - Sarah Drasner | JSConf Hawaii 2020**](https://www.youtube.com/watch?v=yhF7OmuIILc)

Code can describe how, but it cannot explain why. This talk digs into some of the many beneficial types of comments that might all serve a different purpose, followed by patterns you might want to avoid.

___

# Quiz

### What is the output of the below snippet?

```js
const numbers = [22,8,19,32,98];
numbers.sort();
        
console.log(numbers[3])
```

<a href="https://scriptified.dev/issues/1?section=quiz&option=1" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	8
</div>
</a>

<a href="https://scriptified.dev/issues/1?section=quiz&option=2" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	22
</div>
</a>

<a href="https://scriptified.dev/issues/1?section=quiz&option=3" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	32
</div>
</a>

<a href="https://scriptified.dev/issues/1?section=quiz&option=4" style="text-decoration:none;">
<div style="margin: 12px 0px; border: 1px solid gray; padding: 16px; background: #F2F3F5;">
	`Reference Error`
</div>
</a>

___

# This week in GIF

![When your code is working](https://scriptified.dev/images/issue-1/this-week.gif)

<center>when your code works on every machine, not only yours!</center>

---

Liked this issue? [Share on Twitter](https://twitter.com/intent/tweet?text=Have+a+look+at+issue+%231+of+Scriptified.%0D%0A%0D%0ASubscribe+to+%40scriptified_dev+for+more.+%0D%0A%0D%0A&url=https%3A%2F%2Fscriptified.dev%2Fissues%2F1) or [read previous issues](https://scriptified.dev/issues).