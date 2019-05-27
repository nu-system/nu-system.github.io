---
title: 发布
---

# 发布

## UI

```json
{
  "name": "@y-fe/nu-[component]",
  "version": "0.0.1",
  "description": "No UI 组件库系统 nu-system, 弹窗组件",
  "main": "css/core.css",
  "repository": "https://github.com/yued-fe/nu-system/tree/master/components/[component]",
  "author": "YFE-TEAM",
  "license": "MIT",
  "files": [
    "css/"
  ],
  "keywords": [
    "!ui",
    "ui",
    "css",
    "ui-system",
    "[component]"    
  ],
  "bugs": {
    "url": "https://github.com/yued-fe/nu-system/issues"
  },
  "homepage": "https://yued-fe.github.io/nu-system/"
}
```

以上是 package.json 的文档模版，实际开发只需要 `[component]` 替换为相应组件名即可。

```
$ npm publish --access=public
```

在 `package.json` 目录下输入以上命令即可发布到 npm。

```
$ npm i @y-fe/nu-[component]
$ yarn add @y-fe/nu-[component]
```

使用方只需要安装一下即可使用。


## Logic

```json
{
  "name": "@y-fe/nu-[component]-[frame]",
  "version": "0.0.3",
  "description": "No ui 组件库系统 nu-system，[component]组件，[frame] 实现",
  "main": "lib/index.js",
  "repository": "git@github.com:yued-fe/nu-[frame].git",
  "author": "yfe-team",
  "license": "MIT",
  "files": [
    "lib"
  ],
  "bugs": {
    "url": "https://github.com/yued-fe/nu-[frame]/issues"
  },
  "homepage": "https://yued-fe.github.io/nu-[frame]/example/packages/button",
  "dependencies": {
    
  },
  "keywords": [
    "ui",
    "no-ui",
    "nu-system",
    "[frame]",
    "[frame]-ui",
    "[component]"
  ]
}
```

以上是 package.json 的文档模版，实际开发只需要 `[component]` 替换为相应组件名，`[frame]` 替换为JS 框架名即可。

```
$ npm publish --access=public
```

在 `package.json` 目录下输入以上命令即可发布到 npm。

```
$ npm i @y-fe/nu-[component]-[frame]
$ yarn add @y-fe/nu-[component]-[frame]
```

