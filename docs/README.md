---
home: true
actionText: Get Start →
actionLink: /css/
features:
- title: ❤️ UI Just 
  details: 对通用 UI 的进一步抽象，以便于其它人在自定义 Skin 的时候可以写更少样式代码，更像是一个 UI 接口规范
- title: 🌊 Logic Only 
  details: 对通用 Logic 对进一步抽象，以便于其他人在定义 UI 的时候可以写更少逻辑代码，更像是一个 Logic 接口规范
- title: 🌈 Skin Library
  details: 基于 UI Just 或者 Logic Only 提供的样式接口进行开发的可替换的皮肤，可作为一种设计资源被其它项目使用
footer: MIT Licensed | Copyright © 2019-present YFE-TEAM
---

> NU-system 不是一套拿来就用的 UI 库，更像是一个帮助你定制属于自己项目 UI 风格的母版组件库

目前比较流行的如 [element-ui](https://element.eleme.io/) 、 [ant.desigon](https://ant.design/index-cn) 或者其它的 UI 库。都是希望他们的用户承认他们这套 UI，然后开箱即用。毕竟这些 UI 可是他们花了大量的力气请设计师设计的。

然而往往一些产品对于 UI 有自己的定制需求的时候，我们需要刷他们的 UI。如果只是改改颜色还好，但是如果交互逻辑不一样，那就要耗费非常大的力气。

如果你想要一套属于自己产品的 UI 库，但是又不想花太多的时间去纠结和实现 UI 背后的逻辑。

那么 NU-system 是我们提供给你的另一个选择。

Nu-system 主要由 UI Just + Logic Only + Skin Library 三部分组成，彼此之间由接口关联，也可以完全独立。

我们推崇 UI 和 Logic 分离，也希望 NU-system 是一个开放的平台，只要你的组件符合我们的理念和规范，就可以和我们一起将它丰富起来。

## ❤️ UI Just

NU-system 本身并没有对 UI 语言做限制，只是目前 CSS 比较容易实现这套理念，所以暂时提供 CSS 的方式。

- [css-component](/css/) ;

## 🌊 Logic Only

NU-system 本身并没有对逻辑语言做限制，所以可以使用任意 JS 语言创建 Logic Only 部分。

- [vue-component](/vue/) ;
- [react-component](/react/);
- [react-native-component](/react-native/);
- [js-component](/js/);
- jquery-component 可能会考虑用原生 JS 的方式替代;

## 🌈  Skin Library

目标是希望符合相同接口规范的任意 skin 之间可以互换，甚至是作为一种资源被其它人使用。

目前是在 [css-component](/css/) 中的 skins 目录里的。

如果你采用的是 CSS-in-JS 的方案，需要在组件内定义好你的 UI 接口和皮肤拓展方式，类似 [react-native-button](/react-native/button/)。
