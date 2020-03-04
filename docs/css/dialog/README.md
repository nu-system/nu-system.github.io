# Dialog

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-dialog.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-dialog
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-dialog
[git-url]: https://github.com/nu-system/css-dialog
[git-badge]: https://img.shields.io/github/stars/nu-system/css-dialog.svg?style=social

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-dialog-js" src="//codepen.io/ziven27/embed/joKGvJ/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/joKGvJ/'>nu-dialog-js</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

css vanilla dialog component.

## install

```
$ yarn add @_nu/css-dialog
```

```
@_nu/css-dialog/css
├── core.css        // 核心代码
├── transition.css        // 核心代码
└── position
    ├── top.css     // 居上显示
    ├── right.css   // 居右显示
    ├── bottom.css  // 居底显示
    ├── left.css    // 居左显示
    └── middle.css  // 居中显示
```

因为组件只有最基础的交互样式，所以在实际使用需要根据设计需求进行二次样式封装。

## 子组件

| 选择器   |   功能   |
|:----------|-------------:|
| `#nu_dialog_root` |  将所有弹窗都放到该容器下 |
| `.nu_dialog_wrap` |  整个弹窗主容器 |
| `.nu_dialog_mask` | 弹窗遮罩 |
| `.nu_dialog` | 弹窗主体 |
| `.nu_dialog_close` | 弹窗关闭按钮 |

## API

```HTML
<body>
  <!-- others -->
  <div id="nu_dialog_root">
    <dialog tabindex="-1" id="dialog" class="nu_dialog_wrap">
        <button id="mask" title="mask" class="nu_dialog_mask"></button>
        <section class="nu_dialog">
            <button id="close" title="close" class="nu_dialog_close">&times;</button>
            <!-- here put the content -->
        </section>
    </dialog>
  </div>
</body>
```

为了无障碍可访问性，这边推荐使用 `buttton` 标签作为 `mask` 和 `close` 的标签。

| 选择器   |   功能   |
|:----------|-------------:|
| `.nu_dialog_wrap[open] .nu_dialog` |  控制弹窗的显示隐藏 |
| `.nu_dialog_wrap._top .nu_dialog` |  弹窗居上 |
| `.nu_dialog_wrap._right .nu_dialog` |  弹窗居右 |
| `.nu_dialog_wrap._bottom .nu_dialog` |  弹窗居下 |
| `.nu_dialog_wrap._left .nu_dialog` |  弹窗居左 |
| `.nu_dialog_wrap._middle .nu_dialog` |  弹窗居中 |

nu-dialog 这边只是约定了 几个 CSS Hooks 的方案，所以对于使用方来说，可以使用任意js框架（原生js，jquery, react, vue ...）去切换这些API的属性即可。


## 如何添加动效?

```css
.nu_dialog_wrap {
  display: block;
}
.nu_dialog{
  transform: translate(0, 50px);
}
.nu_dialog_wrap {
  transition: opacity 200ms, visibility 200ms;
}
.nu_dialog_wrap[open] {
  transition: opacity 200ms;
}
```

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-dialog-ani" src="//codepen.io/ziven27/embed/KLemVx/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/KLemVx/'>nu-dialog-ani</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Do less but can be more

可以看到我们这里的弹窗组件只做了特别少的事情，甚至看起来什么都没有做。

而这也正是我们 nu-system 区别于其它 UI 组件库的地方。

我们更希望提供的是一个规范，这样才能在不同的项目中定制属于自己的 UI 。


## Logic Only

- [react](https://nu-system.github.io/react/dialog/)
- [vue](https://nu-system.github.io/vue/dialog/)

## Npm CDN

```HTML
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/css/core.min.css" />
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/css/position/top.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/css/position/right.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/css/position/bottom.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/css/position/left.min.css">
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-dialog/css/position/middle.min.css">
```
