---
title: Intro
---

## What?

因为 react-native 默认采用 CSS-in-JS 的方案，所以在 `react-native-[component]` 的时候，需要在组件内定义好你的 UI 接口，和皮肤拓展方式。

## 构建

`react-native-[component]` 不需要构建，可以发布原始代码。对于 Demo 推荐使用 [expo](https://expo.io/)。

## Tree

```bash
[component]
├── README.md         // 介绍你的组件
├── lib               // build 目录
│   └── index.js
└── package.json      // 组件配置
```

## Contribution

Fork [react-native-button](https://github.com/nu-system/react-native-button) 这个作为组件模版，使用里面配置，删除原始代码，然后创建你自己的组件即可。
