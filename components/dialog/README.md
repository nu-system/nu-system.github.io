## 这是什么？

无 UI 依赖组件库 YF，因为其自身并没有自带任何表现型样式，但是限制了规范和拓展方式。所以YF组件库更像是一个组件库的 style guide。

这是 YF 组件库的 弹窗组件。

## Demo

<iframe frameborder="0" src="./pages/index.html" height="800" width="100%"></iframe>

## 怎么用

```
$ cnpm install @yuewen/yf-dialog
```

```
<link src="@yuewen/yf-dialog/css/index.css" />
<link src="@yuewen/yf-dialog/css/position/top.css">
<link src="@yuewen/yf-dialog/css/position/right.css">
<link src="@yuewen/yf-dialog/css/position/bottom.css">
<link src="@yuewen/yf-dialog/css/position/left.css">
<link src="@yuewen/yf-dialog/css/position/middle.css">
```

因为组件只有最基础的交互样式，所以在实际使用需要根据设计需求进行二次样式封装。

**注**：npm包还没有发布到外网, 只能内网使用，想要提前使用 `git clone` 代码即可。

## 基础 API

| class   |   功能   |
|----------|-------------|
| `.yf_dialog_wrap` |  整个弹窗主容器 |
| `.yf_dialog_mask` | 弹窗遮罩 |
| `.yf_dialog` | 弹窗主体 |
| `.yf_dialog_close` | 弹窗关闭按钮 |
| `.yf_dialog_wrap._top` |  居上的弹窗 |
| `.yf_dialog_wrap._right` |  居右的弹窗 |
| `.yf_dialog_wrap._bottom` |  居下的弹窗 |
| `.yf_dialog_wrap._left` |  居左的弹窗 |
| `.yf_dialog_wrap._middle` |  居中的弹窗 |


## CSS API

```HTML

<label class="btn-show-dialog" for="dialogSwitch">显示弹窗</label>

<input id="dialogSwitch" type="checkbox" class="yf_dialog_switch">
<div class="yf_dialog_wrap _middle">
  <label for="dialogMiddleCssSwitch" class="yf_dialog_mask"></label>
  <div class="yf_dialog">
    <label for="dialogMiddleCssSwitch" class="yf_dialog_close">&times;</label>
    <!-- 这是放弹窗内容的地方 -->
  </div>
</div>
```

这里通过 `.yf_dialog_switch:checked + .yf_dialog_wrap` 选择器来控制弹窗的显示，无 JS 依赖。

所以`.yf_dialog_switch` 必须 `.yf_dialog_wrap` 是相邻兄弟元素的关系。

当 `.yf_dialog_switch` 的 `checked` 属性为 `true` 时弹窗显示，其它条件弹窗不显示。

所以需要将 `label` 标签的 `for` 属性设置为 `.yf_dialog_switch` 的ID，以触发`checked`属性的变化。

**注意：** 因为 `input` 本身比较占用浏览器性能，不建议在页面中大量使用 CSS 的方式来控制弹窗显示隐藏。所以只推荐在一些已经能够确定只有一个弹窗的页面使用。

## JS API

```HTML
<div class="yf_dialog_wrap _middle _on">
  <a href="javascript:;" class="yf_dialog_mask" title="mask"></a>
  <div class="yf_dialog">
    <a href="javascript:;" class="yf_dialog_close" title="close">&times;</a>
    <!-- 这是放弹窗内容的地方 -->
  </div>
</div>
```

JS 相对于 CSS 的 API 更加的简单， `.yf_dialog_wrap` 上如果有 `_on` 属性弹窗显示，没有则不显示。

所以对于使用方来说，可以使用任意js框架（原生js，jquery, react, vue ...）去切换这个属性即可。

