---
title: Lint
---

# Html-Lint

[![npm package](https://img.shields.io/npm/v/@_nu/html-lint.svg)](https://www.npmjs.org/package/@_nu/html-lint)
[![github](https://img.shields.io/github/stars/nu-system/html-lint.svg?style=social)](https://github.com/nu-system/html-lint)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@_nu/html-lint/badge)](https://www.jsdelivr.com/package/npm/@_nu/html-lint)

Help people familiar with semantic HTML, Everything is just pure CSS.

Base on the [validator.w3.org](https://validator.w3.org/)

<iframe src="https://nu-system.github.io/html-lint/" style="width:100%; height:500px; border:1px solid #333; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## How to start

```
npm i @_nu/html-lint
```

Or just add the tag below in your html page

```HTML
<link rel="stylesheet" src="https://cdn.jsdelivr.net/npm/@_nu/html-lint/css/debug.css" />
```

2 kinds of validator:
1. Add `:before` of the invalid element
2. Outline of the invalid element

Both of them can find the valid msg on css prop of `content`.

3 kinds of validate level:
1. red: have to fixed
2. yellow: suggest to fixed
3. blue: some tips for this rule


## Prior art

html-lint was build on this awesome projects:

* [https://github.com/t7/construct.css](https://github.com/t7/construct.css)
