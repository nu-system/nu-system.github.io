# Button

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![jsdelivr][jsdelivr-badge]][jsdelivr-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-button.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-button
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-button
[git-url]: https://github.com/nu-system/css-button
[git-badge]: https://img.shields.io/github/stars/nu-system/css-button.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-button/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-button

组件库母版系统 [NU-system](https://nu-system.github.io/) 「 按钮组件 」。

## 怎么用?

```
$ yarn add @_nu/css-button
```

```
@_nu/css-button/css
├── core.css             // 核心代码
└── skins
    ├── bootstrap.css    // bootstrap 按钮皮肤
    ├── loading.css      // 按钮loading 效果
    ├── material.css     // material-ui  按钮皮肤
    └── webnovel.css     // webnovel  按钮皮肤
```

## Skin library

### Bootstrap

<iframe height="480" style="width: 100%;" scrolling="no" title="wbXgba" src="//codepen.io/ziven27/embed/wbXgba/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/wbXgba/'>wbXgba</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Material

<iframe height="480" style="width: 100%;" scrolling="no" title="nu-button-material" src="//codepen.io/ziven27/embed/rgKyap/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/rgKyap/'>nu-button-material</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Webnovel

<iframe height="480" style="width: 100%;" scrolling="no" title="nu-button-webnovel" src="//codepen.io/ziven27/embed/byKqEe/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/byKqEe/'>nu-button-webnovel</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## API

| 选择器                              |                                   功能 |
| :---------------------------------- | -------------------------------------: |
| .nu_btn                             |                       默认的按钮选择器 |
| .nu*btn.*[color]                    |                               按钮颜色 |
| .nu*btn.*[size]                     |                               按钮尺寸 |
| .nu*btn.*[variant]                  |                               按钮形状 |
| .nu_btn:disabled, .nu_btn[disabled] |                             按钮不可用 |
| .nu_btn.\_loading                   |                           loading 按钮 |
| .nu_btn.\_capsule                   |                            圆角按钮 💊 |
| .nu_btn.\_block                     |                           占一行的按钮 |
| .nu_btn.\_circle                    | 正圆按钮，这个并没有实现只是约定了名称 |

- **功能 | 颜色**: `_default`、`_primary`、`_secondary`、`_warning`、`_success`、`_danger`
- **变体 | 形状**: `_fill`、`_ghost`、`_link`
- **尺寸**: `_large`、`_middle`、`_small`
- **其它**: `_disabled`、`_loading`、`_block`、`_capsule`、`_circle`

除了 颜色、形状、和尺寸是互斥的三个状态，其它选择器都是可以相互组合的。

约定变体默认状态是 `_fill`。

默认按钮大小，在`large`和 `middle`之间。

## 如何修改主题?

```scss
.nu_btn._default{
    color:#333333;
    background-color:#333333;
}
.nu_btn._primary{
    color:blue;
    background-color:blue;
}
.nu_btn._warning{
     color:yellow;
     background-color:yellow;
}
/* 其它同理 */
```

虽然 `nu-button` 约定了 6 种颜色，往往实际项目并不需要这么多的颜色，基于实际项目编写即可。
对于边框和背景颜色，组件内部会自动实现。

```css
.nu_btn._ghost._primary {
  border-color: red;
}
```

如果自动实现的代码不能满足你的需求，你可以这样定制。这里我们将 ghost 主按钮的边框改成了红色。

## 如何修改大小？

```css
.nu_btn._large {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}
/* 其它同理 */
```

## 如何修改状态？

```css
.nu_btn._disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
/* 其它同理 */
```

## Logic Only

- [@\_nu/react-button](https://nu-system.github.io/zh/react/button/)
- [@\_nu/vue-button](https://nu-system.github.io/zh/vue/button/)
- [@\_nu/react-native-button](https://nu-system.github.io/zh/react-native/button/)
