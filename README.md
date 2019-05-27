---
home: true
actionText: Start →
actionLink: /guide/develop
features:
- title: UI Core
  details: 非表现型核心样式。
- title: Logic Only
  details: Js 只实现逻辑部分「 react、vue、jquery ...」。
- title: Skin library
  details: 想要 UI，引入 Skin 文件或自定义。
footer: MIT Licensed | Copyright © 2019-present YFE-TEAM
---

# NU-system

No UI 组件库系统 nu-system，是一个 UI 和 Logic 完全分离的组件系统。主要由 UI Core + Logic only + Skin library 三部分组成。

## UI Core

UI Core 是指非表现型样式，是对于通用UI的进一步抽象，以便于其他人在定义 Skin library 可以写更少样式代码。
   
## Logic Only
  
因为逻辑和 UI 的分离，意味着可以使用任意的 JS 框架去实现，UI core 的规范。

同理也可以基于 Logic only 的规范创建 UI Core。

## Skin Library

我们希望 UI Core 和 Login Only 输出的是更具工程化的规范，以至于符合规范的任意 Skin 之间可以互换，甚至是作为一种资源被其它人使用。
