## nu-button

```HTML
<a href="##" class="nu_btn _primary _ghost _large">大号的幽灵主按钮</a>
```

No UI 组件库系统 「 按钮组件 」。


## 怎么用?

```
$ npm i @y-fe/nu-button
$ yarn add @y-fe/nu-button
```

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/webnovel.min.css">
```

```
@y-fe/nu-button/css
├── core.css             // 核心代码
└── skins
    ├── bootstrap.css    // bootstrap 按钮皮肤
    ├── loading.css      // 按钮loading 效果
    ├── material.css     // material-ui  按钮皮肤
    └── webnovel.css     // webnovel  按钮皮肤
```


```
<link src="../nu-button/css/core.css" />
<link src="../nu-button/css/skins/**.css" />
```

## Skin library


### Bootstrap

```HTMl
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/bootstrap.min.css">
```

<iframe height="480" style="width: 100%;" scrolling="no" title="wbXgba" src="//codepen.io/ziven27/embed/wbXgba/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/wbXgba/'>wbXgba</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Material

```HTMl
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/material.min.css">
```

<iframe height="480" style="width: 100%;" scrolling="no" title="nu-button-material" src="//codepen.io/ziven27/embed/rgKyap/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/rgKyap/'>nu-button-material</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Webnovel

```HTMl
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/loading.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/webnovel.min.css">
```

<iframe height="480" style="width: 100%;" scrolling="no" title="nu-button-webnovel" src="//codepen.io/ziven27/embed/byKqEe/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/byKqEe/'>nu-button-webnovel</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



## API

- **功能 | 颜色**: `primary`、`secondary`、`warning`、`success`、`danger`
- **变体 | 形状**: `fill`、`ghost`、`link`
- **状态**: `disabled`、`loading`
- **尺寸**: `largex`、`large`、`middle`、`small`、`smallx`
- **其它**：`block`、`circle`、`capsule`

| 选择器      |  功能 |
|:-------------|------:|
| .nu_btn | 默认的按钮选择器 |
| ._default | 默认主题样式 |
| ._primary | 主按钮 |
| ._secondary | 次级按钮 |
| ._warning | 警告按钮 |
| ._success | 成功按钮 |
| ._danger | 危险按钮 |
| ._disabled,:disabled | 不可用按钮 |
| ._loading | loading按钮 |
| ._largex | 超大号按钮 |
| ._large | 大号按钮 |
| ._middle | 中号按钮 |
| ._small | 小号按钮 |
| ._smallx | 超小号按钮 |
| ._capsule | 圆角按钮 💊 |
| ._fill | 实心按钮 |
| ._ghost | 幽灵按钮 👻 |
| ._link | 链接按钮 🔗 |
| ._block | 占一行的按钮 |
| ._circle | 正圆按钮 ⭕️ |

除了 颜色、形状、和尺寸是互斥的三个状态，其它选择器都是可以相互组合的。

## 如何修改主题?

```css
._primary{
    color:blue;
}
```

主题修改非常简单，只需要设定颜色即可。

## 如何修改大小？

```css
.nu_btn._large {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
```

## 如何修改状态？

```css
.nu_btn:disabled,
.nu_btn._disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```


## Logic Only

- [nu-button-react](https://yued-fe.github.io/nu-react/packages/button)
- [nu-button-vue](https://yued-fe.github.io/nu-vue/packages/button)
