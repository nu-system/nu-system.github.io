# nu-vue

No UI 组件库系统 nu-system，是一个 推崇 UI 和 Logic 完全分离的组件系统。

主要由 UI Just + Logic only 两部分组成，UI 和 Logic 由对应接口关联，也可以完全独立。

nu-vue 是 nu-system 的 Vue 实现。

- [nu-system](https://yued-fe.github.io/nu-system/) 一个 UI 和 Logic 完全分离的组件库系统。
- [nu-react](https://yued-fe.github.io/nu-react/) 是 nu-system 的 React 实现。

## 创建

NU-system 是一个 UI 和 Logic 分离的理念，它应该更像是一个平台，我们希望有更多人可以加入。

只要你设计的组件符合我们的规范，就可以和我们一起将它丰富起来。

**注意**：因为我们推崇 UI 和 Logic 完全分离，所以任何的 JS 语言不管是 VUE 还是 Reatc 都只能实现 Logic 部分。 我们的构建工具本身就不支持 `css`、`less`、`scss` ...

以下以 `button` 组件为例，解释目录结构和规则。

```bash
nu-vue/packages/button
├── README.md         // 介绍你的组件
├── index.js          // VUE 组件引用
├── lib               // build 目录
│   └── index.js     // rollup 打包文件
├── package.json     
└── src               // 原始代码文件夹
    └── index.vue
```


```jsx
/* ./nu-vue/packages/button/index.js */

import Button from "./src/index.vue";

/* istanbul ignore next */
Button.install = function(Vue) {
    Vue.component(Button.name, Button);
};

export default Button;
```

实际创建将 `button` 修改为你的组件名即可。

## 构建

```json
/* ./nu-vue/package.json */

"scripts": {
 "build:[component]": "cross-env PAK_NAME=[component] rollup -c build/rollup.config.build.js",
 /* */
}
```

```bash
$ cd ./nu-vue
$ yarn build:[component]
```

nu-vue 目前是以 rollup 作为打包工具。新组件需要将 `[component]` 替换为相应组件名，才能在 **根目录** 运行以上命令打包相应组件。

## 发布

nu-vue 中的每个组件都是独立进行维护的，所以需要独立发布到 npm 中。

```json
{
  "name": "@y-fe/nu-[component]-vue",
  "version": "0.0.1",
  "description": "No ui 组件库系统 nu-system，[component]组件，vue 实现",
  "main": "lib/index.js",
  "repository": "git@github.com:yued-fe/nu-vue.git",
  "author": "yfe-team",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/yued-fe/nu-vue/issues"
  },
  "homepage": "https://yued-fe.github.io/nu-vue/example/packages/[component]",
  "dependencies": {},
  "keywords": [
    "ui",
    "no-ui",
    "nu-system",
    "vue",
    "vue-ui",
    "[component]"
  ]
}
```

以上是 package.json 的文档模版，实际开发只需要 `[component]` 替换为相应组件名即可。


```
$ npm publish --access=public
```

在 `package.json` 目录下输入以上命令即将单独组件发布到 npm。
