---
title: Intro
---

## What?

`vue-[component]` 主要负责 Login Only 部分 。这里面**尽量**不要出现展示性的样式，只做逻辑的部分。

如果你是采用的 CSS 的方案，那么对应的展示性样式和对应的皮肤，请额外创建 `css-[component]` 组件。

如果你采用的是 CSS-in-js 的方案，需要在组件内定义好你的 UI 接口，和皮肤拓展方式。

## 构建

此处推荐利用 vue 的 vue-cli-service 工具打包组件：

安装工具包

```
npm install -g @vue/cli-service-global
# or
yarn global add @vue/cli-service-global
```

package.json 配置

```
"scripts": {
    "build":"vue-cli-service build --target lib --name index  --dest lib  ./index.js"
},
```

打包命令

```
npm run-script build
```

## Tree

```bash
[component]
├── README.md               // 介绍你的组件
├── index.js                // VUE 组件引用
├── lib                     // build 目录
│   └── index.common.js     // vue-cli-service 打包的文件
├── package.json
└── src                     // 原始代码文件夹
    └── index.vue
```

## Contribution

Fork [vue-button](https://github.com/nu-system/vue-button) 这个作为组件模版，使用里面配置，删除原始代码，然后创建你自己的组件即可。
