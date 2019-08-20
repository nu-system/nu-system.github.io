---
title: Intro
---

## What?

`react-[component]` 主要负责 Login Only 部分 。这里面**尽量**不要出现展示性的样式，只做逻辑的部分。

如果你是采用的 CSS 的方案，那么对应的展示性样式和对应的皮肤，请额外创建 `css-[component]` 组件。

如果你采用的是 CSS-in-js 的方案，需要在组件内定义好你的 UI 接口，和皮肤拓展方式。

## 构建

`react-[component]`  目前是以 [nwb](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb) 作为打包工具。

## Tree

```bash
[component]
├── README.md         // 介绍你的组件
├── package.json      // 组件配置
├── nwb.config.js     // nwb 配置文件
├── es                // build esmodule目录
│   └── index.js
├── lib               // build 目录
│   └── index.js
└── src               // 原始代码文件夹
    └── index.js      // react 组件入口文件
```

## Contribution

Fork [react-button](https://github.com/nu-system/react-button) 这个作为组件模版，使用里面配置，删除原始代码，然后创建你自己的组件即可。
