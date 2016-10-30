+++
date = "2016-10-29T01:00:12+02:00"
title = "SpoilerAlert"
description = "SpoilerAlert"
image = "spoiler-alert-small.jpg"
imageBig = "spoiler-alert-medium.jpg"

tags = [
  "cool",
  "js",
]

[author]
image = "petar.png"
name = "Petar Slovic"
url = "/author/petarslovic"

+++

**Repo** [https://github.com/joshbuddy/spoiler-alert](https://github.com/joshbuddy/spoiler-alert)  


SpoilerAlert is a nifty little JavaScript plugin for those who post spoilers on their websites. You don't want to unintentionally read a spoiler to your favorite TV show's last episode in an article - because how can you know that it's a spoiler before you read it! Instead, authors of the website can use SpoilerAlert to mark spoilers in the text, and the plugin will blur them.

Then, when you mouseover the spoiler, it will partially un-blur. Now you can click on it - if you're totally sure - to reveal the text.

{{< figure src="/images/reviews/spoiler-alert.gif" title="SpoilerAlert in action" >}}

## Contributions

We've created several pull requests, trying to contribute some of the things which we discuss here, and adding a few tiny features.

- {{< emoji ":white_square_button:" >}} Add eslint and style code to match the rules ([Pull #25](https://github.com/joshbuddy/spoiler-alert/pull/25))
- {{< emoji ":white_square_button:" >}} Update and expand the README file ([Pull #26](https://github.com/joshbuddy/spoiler-alert/pull/26))
- {{< emoji ":white_square_button:" >}} Add an option for setting the translation speed ([Pull #27](https://github.com/joshbuddy/spoiler-alert/pull/27))
- {{< emoji ":white_square_button:" >}} Add a fallback CSS mechanism based on `text-shadow` ([Pull #28](https://github.com/joshbuddy/spoiler-alert/pull/28))

There are still some things that can be worked on - and I encourage you to take it on!

- {{< emoji ":white_large_square:" >}} Add tests
- {{< emoji ":white_large_square:" >}} Optimize for Chrome on Android ([Issue #4](https://github.com/joshbuddy/spoiler-alert/issues/4))
- {{< emoji ":white_large_square:" >}} Add an option for the blur to be removed on mouseover instead on click ([Issue #22](https://github.com/joshbuddy/spoiler-alert/issues/22))

## Code

Code is short and pretty well written. The whole plugin is just a function wrapped in an [IIFE - Immediately Invoked Function Expression](http://gregfranko.com/blog/i-love-my-iife/). It takes the element selector you passed in, finds the elements that match it, and applies blur to them.

### Code Style

Code style is a bit inconsistent. There's sometimes no space after an parentheses, like so `){`. Or no space in between operators and operands, like so `a+b`. I think that small things like these amount to noticeable cognitive dissonance. And I don't think it's just a matter of whether or not you've got a case of that *developer OCD*. I find that it can decrease readability of the code and have a deteriorating effect on the communication between team members.

The cure is to use a tool like [ESLint](http://eslint.org/) which offers a really good set of rules that not only help you write pretty and consistent code, but also helps you avoid some common syntactic and logical errors.

### Browser Support

Although good, the browser support is lacking on some platforms, as a few issues tell us. One issue even asks if there should be a CSS-only fallback for those who have JavaScript disabled. But I don't really think that we should concern ourselves with the JavaScript disabled issue, as the Web has become a very interactive place, and, in normal circumstances browsing it with JavaScript turned off doesn't make much sense.

The plugin relies on CSS Filters for providing the blur effect.

```css
.blur {
  filter: blur(4px);
}
```

The support is pretty good, as can be seen on [caniuse](http://caniuse.com/#feat=css-filters). Still, there should be some kind of fallback provided. The other way of creating a blur effect on text is via [text-shadow](https://css-tricks.com/fun-with-blurred-text/), which is supported by the browsers a bit [better](http://caniuse.com/#feat=css-textshadow).

This still leaves blurring images unavailable on older browsers. But since the spoilers are mainly found in text, I think we can reasonably disregard this case.

### Contributing

There is no CONTRIBUTING file to outline this, but there is a ***Makefile*** that does the minification of the source. And you need to run `npm install` before to get the `uglify` package which is used for that purpose.

## GitHub

Overall, the GitHub page of the project is pretty well maintained.

What I find really amazing about this plugin is that, even though it has less than 100 lines of code, it has 9 contributors! And it seems that they were collaborating quite nicely on this project, and that's what GitHub is all about!

### README.md

A README file is present, and it's not bad - it's got a description, API and examples and a link to a demo. But there is space for improvement. I recently found a great *npm* package - [CommonReadme](https://github.com/noffle/common-readme) - that tries to standardize README files in the NodeJS community by providing a well thought out template that anyone can use. It also takes as much info as possible from your `package.json` and inserts it into the generated template.

### GitHub Issues

There are several issues open on GitHub. Some have responses and some don't. There are also several closed issues and merged pull requests, which is great.

The issues aren't labeled, and that's okay for such a small project. But even a small project, when there's a lot of people working on it, can benefit from using a labeling system. Here are a few good articles that tackle this problem and offer systematic solutions:

- [How we organize GitHub issues: A simple styleguide for tagging](https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/)
- [Sane GitHub Labels](https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63#.94bfrgfuv)

### Tests

There are no tests. There is not much to test, as the plugin is very small, but it would be great to see some tests nonetheless.

### Commits

Commits are pretty good too. You can see that they are atomic, which is great. But, there are some meaningless commit messages too, like *"Much better cleanup"* and *"Lines"*.

## Full Checklist

### GitHub Page / Docs:

- {{< emoji ":white_square_button:" >}} Is there a description in the top? Yes
- {{< emoji ":white_medium_small_square:" >}} Is there a link to a project's website? No
- {{< emoji ":white_square_button:" >}} Does the Readme display a nice typography rhythm in terms of titles and subtitles? Yes, but it's short
- {{< emoji ":white_square_button:" >}} Does the Readme contain a short description of what the library does? Yes
- {{< emoji ":white_square_button:" >}} Does the Readme contain documentation about the API? Yes
- {{< emoji ":white_square_button:" >}} Does the Readme contain code examples with the documentation of methods? Yes
- {{< emoji ":white_medium_small_square:" >}} Does the Readme specify guidelines for contributing? No
- {{< emoji ":white_square_button:" >}} Does the Readme specify the license? Yes
- {{< emoji ":white_square_button:" >}} Are there Releases? Yes
- {{< emoji ":white_medium_small_square:" >}} Are the Releases well documented? No
- {{< emoji ":white_medium_small_square:" >}} Travis or other CI? No
- {{< emoji ":white_medium_small_square:" >}} Are there demos? Not in the repo, but there's a link to a demo
- {{< emoji ":white_medium_small_square:" >}} Is there a diagram explaining the code structure? No
- {{< emoji ":white_medium_small_square:" >}} Was the project updated recently? No, not for several months

### Issues & Collaboration

- {{< emoji ":white_medium_small_square:" >}} Are there many issues? No
- {{< emoji ":white_medium_small_square:" >}} Are they swiftly responded to? No
- {{< emoji ":white_medium_small_square:" >}} Are the issues labeled? No
- Number of contributors? 9

### Git

- {{< emoji ":white_square_button:" >}} Are commits atomic? Yes
- {{< emoji ":white_square_button:" >}} Are there a lot of nonsense commit messages? Yes
- {{< emoji ":white_medium_small_square:" >}} Are there feature branches? No
- {{< emoji ":white_medium_small_square:" >}} Release branches, hotfix? No
- Number of stars, forks and watches? 24 watches, 58 forks, 475 stars! Great!
- {{< emoji ":white_square_button:" >}} Any pull requests? Yes, and they have all been merged.

### The Code

- {{< emoji ":white_square_button:" >}} Is there a package.json? Yes
- {{< emoji ":white_medium_small_square:" >}} Is there a bower.json, if applicable? No
- {{< emoji ":white_square_button:" >}} Are packages up to date? Yes, there is only one.
- {{< emoji ":white_medium_small_square:" >}} Is there .jshint, .eslint or some other linting tool? No
- {{< emoji ":white_medium_small_square:" >}} Is there a dist folder or equivalent? No
- {{< emoji ":white_square_button:" >}} Is there a minified version of the library? Yes
- {{< emoji ":white_medium_small_square:" >}} Is there a module bundler? No
- {{< emoji ":white_square_button:" >}} Is there a task runner? Kinda, there's a Makefile
- {{< emoji ":white_medium_small_square:" >}} Are there tests? (unit, e2e) No
- {{< emoji ":white_medium_small_square:" >}} Is code consistently formatted? No
- {{< emoji ":white_medium_small_square:" >}} Does code follow a style guide? No
- {{< emoji ":white_medium_small_square:" >}} Are there meaningful comments? No
- {{< emoji ":white_square_button:" >}} Is there a config / options object? Yes
- {{< emoji ":white_medium_small_square:" >}} Does the code depend on any external libraries? No
- {{< emoji ":white_medium_small_square:" >}} Does it play well with other libraries? (overriding _ or $, noConflict method) No
- {{< emoji ":white_medium_small_square:" >}} Does it use OO js? No
- {{< emoji ":white_medium_small_square:" >}} Are there any design patterns used? No
- {{< emoji ":white_medium_small_square:" >}} Do CSS class names refer to the function in the page (img-caption), and not form (bold-red) or content (pink-elephant)? No classes here
- {{< emoji ":white_square_button:" >}} Correctness - Does the code do everything it claims? Yes
- {{< emoji ":white_square_button:" >}} Complexity - Does it accomplish its goals in a straightforward way? Yes
- {{< emoji ":white_square_button:" >}} Consistency - Does it achieve its goals consistently? Yes
- {{< emoji ":white_square_button:" >}} Maintainability - Could the code be easily extended by another member of the team with a reasonable level of effort? Yes
- Scalability - Is the code written in such a way that it would work for both 100 users and 10,000? Is it optimized? Not applicable.