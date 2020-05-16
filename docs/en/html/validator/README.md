# Validator

| npm package| npm downloads| jsdelivr |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] | [![github][git-badge]][git-url] |


[npm-badge]: https://img.shields.io/npm/v/@_nu/html-validator.svg
[npm-url]: https://www.npmjs.org/package/@_nu/html-validator
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/html-validator
[git-url]: https://github.com/nu-system/html-validator
[git-badge]: https://img.shields.io/github/stars/nu-system/html-validator.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/html-validator/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/html-validator

Semantic HTML linter in just pure CSS way.

<iframe src="https://nu-system.github.io/html-validator/" style="width:100%; height:500px; border:1px solid #333; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## How to start

```
npm i @_nu/html-validator
```

Or just add the tag below in your html page

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@_nu/html-validator" />
```

If you just wanna use level1 try 

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@_nu/html-validator/level1.css" />
```

## Content

```bash
html-validator/css
├── level1.css    // leve1 「 red 」:  force validate rules
└── level2.css    // leve2 「 yellow 」: level1.css + suggest validate rules
```

All valid msg on css prop of `content`.

## Prior art

`@_nu/html-validator` was build on this awesome projects:

* [https://github.com/t7/construct.css](https://github.com/t7/construct.css)
