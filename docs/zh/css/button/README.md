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

[English](https://nu-system.github.io/css/button/) | 简体中文

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

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-button-bootstrap" src="https://codepen.io/ziven27/embed/wbXgba?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/wbXgba'>nu-button-bootstrap</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## API

| 选择器 |  功能 |
|:-------------|------:|
| .nu_btn | 默认的按钮选择器 |
| .nu_btn._[color] | 按钮颜色 |
| .nu_btn._[size] | 按钮尺寸 |
| .nu_btn._[variant] | 按钮形状 |
| .nu_btn:disabled, .nu_btn[disabled] | 按钮不可用 |
| .nu_btn._loading | loading按钮 |
| .nu_btn._capsule | 圆角按钮 💊 |
| .nu_btn._block | 占一行的按钮 |
| .nu_btn._circle | 正圆按钮，这个并没有实现只是约定了名称 |

- **功能 | 颜色**: `_default`、`_primary`、`_secondary`、`_warning`、`_success`、`_danger`
- **变体 | 形状**: `_fill`、`_ghost`
- **尺寸**: `_large`、`_middle`、`_small`
- **其它**: `_disabled`、`_loading`、`_block`、`_capsule`、`_circle`

除了 颜色、形状、和尺寸是互斥的三个状态，其它选择器都是可以相互组合。

默认按钮大小，在`large`和 `middle`之间。

## 如何修改主题?

```scss

/** primary button */
.nu_btn._primary:not(._fill){
    color:blue;
}
.nu_btn._primary._fill{
    background-color:blue;
}

/** warning button */
.nu_btn._warning:not(._fill){
    color:yellow;
}
.nu_btn._warning._fill{
    background-color:yellow;
}

虽然 `nu-button` 约定了6种颜色，往往实际项目并不需要这么多的颜色，基于实际项目编写即可。

如果自动实现的代码不能满足你的需求，你可以这样定制。这里我们将 ghost 主按钮的边框改成了红色。

## 如何修改大小？

```css
.nu_btn._large {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
/* 其它同理 */
```

## 如何修改状态？

```css
.nu_btn:disabled,  .nu_btn[disabled]{
  cursor: not-allowed;
  pointer-events: none;
}
```

## Logic Only

- [@_nu/react-button](https://nu-system.github.io/zh/react/button/)
- [@_nu/vue-button](https://nu-system.github.io/zh/vue/button/)
- [@_nu/react-native-button](https://nu-system.github.io/zh/react-native/button/)
