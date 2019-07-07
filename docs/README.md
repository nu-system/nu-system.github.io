---
home: true
actionText: Get Start →
actionLink: /vanilla/
features:
- title: ❤️ UI Just
  details: UI Just UI
- title: 🌊 Logic Only
  details: Logic Only Logic
- title: 🌈 Skin Library
  details: Plug and play
footer: MIT Licensed | Copyright © 2019-present YFE-TEAM
---

# NU-system

No UI 组件库系统 nu-system，是一个 推崇 UI 和 Logic 分离的组件库母版系统。

主要由 UI Just + Logic Only + Skin Library 三部分组成，彼此之间由接口关联，也可以完全独立。

我们希望 NU-system 是一个开放的平台，只要你的组件符合我们的理念和规范，就可以和我们一起将它丰富起来。

## ❤️ UI Just

对通用 UI 的进一步抽象，以便于其他人在定义 Skin 的时候可以写更少样式代码，更像是一个 UI 接口规范。

NU-system 本身并没有对 UI 语言做限制，只是目前 CSS 比较容易实现这套理念，所以暂时提供 Vanilla CSS 的方式。

- [nu-vanilla](https://nu-system.github.io/vanilla/) ;

## 🌊 Logic Only

对通用 Logic 对进一步抽象，以便于其他人在定义 UI 的时候可以写更少样式代码，更像是一个 Logic 接口规范。

NU-system 本身并没有对逻辑语言做限制，所以可以使用任意 JS 语言创建 Logic Only 部分。

- [nu-vue](https://nu-system.github.io/vue/) ;
- [nu-react](https://nu-system.github.io/react/);
- [nu-react-native](https://nu-system.github.io/react-native/);
- nu-jquery 规划之中;
- nu-js 规划之中;

## 🌈  Skin Library

基于 UI Just 或者 Skin Library 提供的样式接口进行开发的可替换的皮肤。

目标是希望符合相同接口规范的任意 skin 之间可以互换，甚至是作为一种资源被其它人使用。

- [nu-vanilla](https://nu-system.github.io/vanilla/) ;
- nu-css-in-js： 已经在 [@_nu/react-native-button](https://nu-system.github.io/react-native/button/) 中尝试, 但发现有点难将 Skin 单独抽离出来;
