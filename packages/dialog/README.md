---
title: Dialog
---

# nu-dialog

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-dialog-js" src="//codepen.io/ziven27/embed/joKGvJ/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/joKGvJ/'>nu-dialog-js</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

No UI 组件库系统 「 弹窗组件 」。


## 怎么用?

```
$ npm i @y-fe/nu-dialog
$ yarn add @y-fe/nu-dialog
```

```HTML
<link src="https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/core.min.css" />
<link src="https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/top.min.css">
<link src="https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/right.min.css">
<link src="https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/bottom.min.css">
<link src="https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/left.min.css">
<link src="https://cdn.jsdelivr.net/npm/@y-fe/nu-dialog/css/position/middle.min.css">
```

因为组件只有最基础的交互样式，所以在实际使用需要根据设计需求进行二次样式封装。

## 子组件

| 选择器   |   功能   |
|:----------|-------------:|
| `.nu_dialog_wrap` |  整个弹窗主容器 |
| `.nu_dialog_mask` | 弹窗遮罩 |
| `.nu_dialog` | 弹窗主体 |
| `.nu_dialog_close` | 弹窗关闭按钮 |

和其它 UI 库的弹窗组件不同的是，在 Nu-system 中，我们并没有将 `title`,`header`,`body`,`footer` 列为弹窗的范畴。在我们看来这几个组件的覆盖面都太小了。

## API

```HTML
<div class="nu_dialog_wrap _middle _on">
  <label class="nu_dialog_mask" title="mask"></label>
  <div class="nu_dialog">
    <label class="nu_dialog_close" title="close">&times;</label>
    <!-- 这是放弹窗内容的地方 -->
  </div>
</div>
```

为了无障碍可访问性，这边推荐使用 `label` 标签作为 `mask` 和 `close` 的标签。

| 选择器   |   功能   |
|:----------|-------------:|
| `.nu_dialog_wrap._on .nu_dialog` |  控制弹窗的显示隐藏 |
| `.nu_dialog_wrap._top .nu_dialog` |  弹窗居上 |
| `.nu_dialog_wrap._right .nu_dialog` |  弹窗居右 |
| `.nu_dialog_wrap._bottom .nu_dialog` |  弹窗居下 |
| `.nu_dialog_wrap._left .nu_dialog` |  弹窗居左 |
| `.nu_dialog_wrap._middle .nu_dialog` |  弹窗居中 |
| `body.nu_dialog_open` |  用于控制弹窗底层滚动条 |

nu-dialog 这边只是约定了 几个 CSS Hooks 的方案，所以对于使用方来说，可以使用任意js框架（原生js，jquery, react, vue ...）去切换这些API的属性即可。



**注**: 为了防止底层滚动条滚动，可以在弹窗显示的时候在 `body` 上添加 `.nu_dialog_open`。

## 如何添加动效?

```css
.nu_dialog_warp._middle .nu_dialog{
    transform:  rotate(360deg) translate3D(0, 20%, 0);
}
.nu_dialog_warp._middle._on .nu_dialog{
    transform:  rotate(0) translate3D(0, 0, 0);
}
```

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-dialog-ani" src="//codepen.io/ziven27/embed/KLemVx/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/KLemVx/'>nu-dialog-ani</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Someting awesome

```HTML
<label class="btn-show-dialog" for="dialogSwitch">显示弹窗</label>
<input id="dialogSwitch" type="checkbox" class="nu_dialog_switch">
<div class="nu_dialog_wrap _middle">
  <label for="dialogMiddleCssSwitch" class="nu_dialog_mask"></label>
  <div class="nu_dialog">
    <label for="dialogMiddleCssSwitch" class="nu_dialog_close">&times;</label>
    <!-- 这是放弹窗内容的地方 -->
  </div>
</div>
```

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-dialog-css" src="//codepen.io/ziven27/embed/zQaZay/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/zQaZay/'>nu-dialog-css</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

nu-dialog Api 因为简单，你甚至可以通过 `:checked` 属性实现纯 CSS 控制弹窗的显示和隐藏。

**注**: 当然这里只是用这个来举例说明 nu-dialog 的拓展性，并不推荐在实际开发环境采用这种方式。

## Do less but can be more

可以看到我们这里的弹窗组件只做了特别少的事情，甚至看起来什么都没有做。

而这也正是我们 nu-system 区别于其它 UI 组件库的地方。

我们更希望提供的是一个规范，这样才能在不同的项目中定制属于自己的 UI 。


## Logic

- [nu-dialog-react](https://yued-fe.github.io/nu-react/)
- [nu-dialog-vue](https://yued-fe.github.io/nu-vue/)
