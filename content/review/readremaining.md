+++
date = "2016-07-23T01:00:12+02:00"
title = "ReadRemaining"
description = "ReadRemaining.js"
image = "readremaining-small.jpg"
imageBig = "readremaining-medium.jpg"

tags = [
  "cool",
  "jQuery",
]

[author]
image = "petar.png"
name = "Petar Slovic"
url = "/author/petarslovic"

+++

**Repo:** https://github.com/Aerolab/readremaining.js  

ReadRemaining is a cool jQuery plugin that calculates the time needed to read a text on a web page, and then as you scroll, it updates that info, telling you how long until the end of text, based on your scrolling speed.

{{< figure src="/images/reviews/readremaining.gif" title="Read Remaining in action" >}}

## Code

Code looks good. There are classic patterns for defining jQuery plugins at work. Wrapping the code with

``` js
;(function($, window, document, undefined) {
  // code
})(jQuery, window, document);
```

has several benefits. The `;` at the begining of the line prevents errors that can happen due to concatenation of files, and some of them not having the closing `;`.

Wrapping the code in an [IIFE - Immediately Invoked Funciton Expression](http://gregfranko.com/blog/i-love-my-iife/) creates an isolated local scope, that the rest of the code cannot touch, without us explicitly allowing that.

Lastly, passing the global arguments into our IIFE does a few things. First, it reduces the lookups up the prototype chain, giving us a tiny performance optimization. But, more importantly, by explicitly passing global arguments to our code like this, we avoid name confilcts. For example, by using `$` in our code, we might get into trouble with other libraries also using that symbol, but when we pass `jQuery` when invoking the IIFE and use it as `$` inside it, we know that we're referring to jQuery. Lastly, by accepting `undefined` as the last argument, we guard ourselves against somebody maliciously overriding it.

### Plugin Registration

The plugin is implemented as a function, with methods added it its prototype, which is a implementation of a class in JavaScript. That's great. Also, there's a specific way of registering the plugin with jQuery, which guards against multiple instances.

``` js
/* jQuery Plugin Boilerplate: A really lightweight plugin wrapper around the constructor, preventing against multiple instantiations */  
  $.fn[pluginName]=function(options){if(typeof arguments[0]==="string"){var methodName=arguments[0];var args=Array.prototype.slice.call(arguments,1);var returnVal;this.each(function(){if($.data(this,"plugin_"+pluginName)&&typeof $.data(this,"plugin_"+pluginName)[methodName]==="function")returnVal=$.data(this,"plugin_"+pluginName)[methodName].apply(this,args);else throw new Error("Method "+methodName+" does not exist on jQuery."+pluginName);});if(returnVal!==undefined)return returnVal;else return this}else if(typeof options==="object"||!options)return this.each(function(){if(!$.data(this,"plugin_"+pluginName))$.data(this,"plugin_"+pluginName,new Plugin(this,options))});return this};

```

### Plugin Options

There are a couple of ways to implement options in a plugin. Most often we allow the user to pass a configuration object, containing all the custom options, and we have our defaults defined in the plugin, and then we merge the two objects, therefore user's configuration overwriting our defaults.

In this plugin we see that approach, with `$.extend` method used to merge the options that user passed with the default ones.

``` js
var defaults = {
  showGaugeDelay   : 1000,
  showGaugeOnStart : false,
  timeFormat       : '%mm %ss left',
  maxTimeToShow    : 20*60,
  minTimeToShow    : 10,
  gaugeContainer   : '',
  insertPosition   : 'prepend',
  verboseMode      : false,
  gaugeWrapper     : '',
  topOffset        : 0,
  bottomOffset     : 0
};

this.settings = $.extend({}, defaults, options);
```

### Code Style

One thing I didn't like are inconsistencies in code style.

Sometimes you'll find single quotes, and sometimes double quotes. Sometimes an if statement will not have surronding brackets. `==` is used in favour of `===`.

## Comments

There's a lot of comments, and they contain useful information.

At the top, there are comments labeled by `1.`, `1.1`, `1.2`... and used in code by referencing that label. I'm not sure if I like this. It is an interesting idea, but it may make the reading of code harder, since you have to scroll to the top every time you encounter a label as a comment.

## Contributions

We've sent a few pull requests, addressing some of the things we found are missing:

- {{< emoji ":white_square_button:" >}} Add eslint, and style code according to it
- {{< emoji ":white_medium_small_square:" >}} Add tests
- {{< emoji ":white_medium_small_square:" >}} Close a few issues

This plguin is a great idea and a really good execution. Most of the important things from the checklist are there. A few things are missing though:

 - atomic commits
 - tests
 - a linter
 - unclosed issues

###  Atomic commits

There is just one big commit with most of the code, and then a few others that fix typos or add css. We should commit atomically so that other people can see how the code evolved and got to the point where it is now. So in the future, it would be great to see some commits that are better organized.

### Tests

There are no tests included. This plugin could be tested nicely, checking the consistency and results of the function that figures out how much time will reading a text (or a part of it) take. Testing scrolling behavior might be a bit tricky (http://spirytoos.blogspot.rs/2014/02/testing-windowscroll-with-qunitjasmine.html).

### Linter

We should have a JavaScript linter in the project, so that we can be notified when we're not writing consistently styled code.

### Unclosed issues

There are several issues that aren't closed. Even though the author did discuss the course of action in most of the issues, no action was taken.

## Full Checklist

### GitHub Page / Docs:

- {{< emoji ":heavy_check_mark:" >}} Is there a description in the top? Yes
- {{< emoji ":heavy_check_mark:" >}} Is there a link to a project's website? Yes
- {{< emoji ":heavy_check_mark:" >}} Does the Readme display a nice typography rhythm in terms of titles and subtitles? Yes
- {{< emoji ":heavy_check_mark:" >}} Does the Readme contain a short description of what the library does? Yes
- {{< emoji ":heavy_check_mark:" >}} Does the Readme contain documentation about the API? Yes
- {{< emoji ":heavy_check_mark:" >}} Does the Readme contain code examples with the documentation of methods? Yes
- {{< emoji ":x:" >}} Does the Readme specify guidelines for contributing? No
- {{< emoji ":heavy_check_mark:" >}} Does the Readme specify the license? Yes
- {{< emoji ":heavy_check_mark:" >}} Are there Releases? Yes
- {{< emoji ":x:" >}} Are the Releases well documented? No
- {{< emoji ":x:" >}} Travis or other CI? No
- {{< emoji ":heavy_check_mark:" >}} Are there demos? Yes
- {{< emoji ":x:" >}} Is there a diagram explaining the code structure? No
- {{< emoji ":x:" >}} Was the project updated recently? No

### Issues & Collaboration

- {{< emoji ":heavy_check_mark:" >}} Are there many issues? No
- {{< emoji ":x:" >}} Are they swiftly responded to? No
- {{< emoji ":x:" >}} Are the issues labeled? No
- Number of contributors? 1

### Git

- {{< emoji ":x:" >}} Are commits atomic? No, all at once
- {{< emoji ":heavy_check_mark:" >}} Are there a lot of nonsense commit messages? No
- {{< emoji ":x:" >}} Are there feature branches? No
- {{< emoji ":x:" >}} Release branches, hotfix? No
- Number of stars, forks and watches? 27 watches, 45 forks, 497 stars! Nice!
- {{< emoji ":x:" >}} Any pull requests? No

### The Code

- {{< emoji ":heavy_check_mark:" >}} Is there a package.json? Yes
- {{< emoji ":heavy_check_mark:" >}} Is there a bower.json, if applicable? Yes
- {{< emoji ":heavy_check_mark:" >}} Are packages up to date? Yes, no dependencies
- {{< emoji ":x:" >}} Is there .jshint, .eslint or some other linting tool? No
- {{< emoji ":x:" >}} Is there a dist folder or equivalent? No
- {{< emoji ":heavy_check_mark:" >}} Is there a minified version of the library? Yes, in src directory
- {{< emoji ":x:" >}} Is there a module bundler? No, no need
- {{< emoji ":x:" >}} Is there a task runner? No, no need
- {{< emoji ":x:" >}} Are there tests? (unit, e2e) No
- {{< emoji ":heavy_check_mark:" >}} Is code consistently formated? Yes, mostly
- {{< emoji ":x:" >}} Does code follow a style guide? No
- {{< emoji ":heavy_check_mark:" >}} Are there meaningful comments? Yes, very nice
- {{< emoji ":heavy_check_mark:" >}} Is there a config / options object? Yes
- {{< emoji ":x:" >}} Does the code depend on any external libraries? Yes, jQuery
- {{< emoji ":heavy_check_mark:" >}} Does it play well with other libraries? (overriding _ or $, noConflict method) Yes
- {{< emoji ":heavy_check_mark:" >}} Does it use OO js? Yes
- {{< emoji ":heavy_check_mark:" >}} Are there any design patterns used? Yes, jQuery plugin pattern
- {{< emoji ":heavy_check_mark:" >}} Do CSS class names refer to the function in the page (img-caption), and not form (bold-red) or content (pink-elephant)? Yes
- {{< emoji ":heavy_check_mark:" >}} Correctness - Does the code do everything it claims? Yes
- {{< emoji ":heavy_check_mark:" >}} Complexity - Does it accomplish its goals in a straightforward way? Yes
- {{< emoji ":heavy_check_mark:" >}} Consistency - Does it achieve its goals consistently? Yes
- {{< emoji ":heavy_check_mark:" >}} Maintainability - Could the code be easily extended by another member of the team with a reasonable level of effort? Yes
- Scalability - Is the code written in such a way that it would work for both 100 users and 10,000? Is it optimized? Not applicable