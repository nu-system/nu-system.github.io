---
title: Validator
---

# Html-Validator

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![jsdelivr][jsdelivr-badge]][jsdelivr-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/html-validator.svg
[npm-url]: https://www.npmjs.org/package/@_nu/html-validator
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/html-validator
[git-url]: https://github.com/nu-system/html-validator
[git-badge]: https://img.shields.io/github/stars/nu-system/html-validator.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/html-validator/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/html-validator

纯 CSS 实现的语义化 HTML 校验工具.

<iframe src="https://nu-system.github.io/html-validator/" style="width:100%; height:500px; border:1px solid #333; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## 开始

```
npm i @_nu/html-validator
```

或者直接粘贴以下代码到项目中即可：

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@_nu/html-validator" />
```

如果你只是想要一级的校验，可以这样：

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@_nu/html-validator/level1.css" />
```

## Content

```bash
html-validator/css
├── level1.css    // leve1 「 red 」:  强制的校验规则
└── level2.css    // leve2 「 yellow 」: 强制的校验规则 + 建议的规则
```

所有的校验提示文案都放在 CSS 属性 `content` 中.

## 技术方案

`@_nu/html-validator` 是基于以下项目构建

- [https://github.com/t7/construct.css](https://github.com/t7/construct.css)
