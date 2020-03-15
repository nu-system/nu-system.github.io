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

## How?

```
$ yarn add @_nu/css-button
```

```
@_nu/css-button/css
├── core.css             // core code
└── skins
    ├── bootstrap.css    // skin of bootstrap
    ├── loading.css      // skin of loading 
    ├── material.css     // skin of  material-ui 
    └── webnovel.css     // skin of  webnovel 
```

## Skins

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

| 选择器 |  功能 |
|:-------------|------:|
| Selector |  Function |
|:-------------|------:|
| .nu_btn | base selector |
| .nu_btn._[color] | color style |
| .nu_btn._[size] | size of button |
| .nu_btn._[variant] | variant of button |
| .nu_btn:disabled, .nu_btn[disabled] | status of disabled |
| .nu_btn._loading | loading |
| .nu_btn._capsule | button like capsule 💊 |
| .nu_btn._block | block button |
| .nu_btn._circle | button circle |

- **function | color**: `_default`、`_primary`、`_secondary`、`_warning`、`_success`、`_danger`
- **variant | shape**: `_fill`、`_ghost`、`_link`
- **size**: `_large`、`_middle`、`_small`
- **other**: `_disabled`、`_loading`、`_block`、`_capsule`、`_circle`

Except color, variant, and size, all selectors can be combined with each other.

The default state of the convention variant is `_fill`。

Default button size, between 'large' and 'middle'.。

## Custom color?

```scss
.nu_btn._default{
    color:#333333;
}
.nu_btn._primary{
    color:blue;
}
.nu_btn._warning{
     color:yellow;
}
```

Although `nu-button` specifies 6 colors, the actual project usually doesn't need so many colors, just write based on the actual project.

For border and background colors, the interior of the component is automatically implemented.

```css
.nu_btn._ghost._primary{
    border-color: red;
}
```

If the automated code doesn't meet your needs, you can customize it this way. Here we change the border of the ghost main button to red.

## Custom size？

```css
.nu_btn._large {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
```

## Custom status？

```css
.nu_btn._disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

## Logic Only

- [@_nu/react-button](https://nu-system.github.io/react/button/)
- [@_nu/vue-button](https://nu-system.github.io/vue/button/)
- [@_nu/react-native-button](https://nu-system.github.io/react-native/button/)
