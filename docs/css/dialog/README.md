# Dialog

| npm package| npm downloads| jsdelivr |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] | [![github][git-badge]][git-url] |


[npm-badge]: https://img.shields.io/npm/v/@_nu/css-dialog.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-dialog
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-dialog
[git-url]: https://github.com/nu-system/css-dialog
[git-badge]: https://img.shields.io/github/stars/nu-system/css-dialog.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-dialog/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-dialog

CSS vanilla dialog component.

<iframe height="600" style="width: 100%;" scrolling="no" title="nu-dialog-js" src="//codepen.io/ziven27/embed/joKGvJ/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/joKGvJ/'>nu-dialog-js</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## install

```
$ yarn add @_nu/css-dialog
```

```
@_nu/css-dialog/css
├── core.css        // core
├── transition.css  // animation 
└── position
    ├── top.css     // show on top
    ├── right.css   // show on right
    ├── bottom.css  // show on bottom
    ├── left.css    // show on left
    └── middle.css  // show on middle
```

## API

```HTML
<body>
  <!-- others -->
  <div id="nu_dialog_root">
    <dialog role="dialog" aria-modal="true" tabindex="-1" id="dialog" class="nu_dialog_wrap">
        <button id="mask" title="mask" class="nu_dialog_mask"></button>
        <section tabindex="-1" class="nu_dialog">
            <!-- here put the content -->
            <button id="close" title="close" class="nu_dialog_close">&times;</button>
        </section>
    </dialog>
  </div>
</body>
```

For accessibility, the `button` tag is recommended for `mask` and `close` labels.

| Selector   |   function   |
|:----------|-------------:|
| `.nu_dialog_wrap[open] .nu_dialog` |  show or hide |
| `.nu_dialog_wrap._top .nu_dialog` |  show on top |
| `.nu_dialog_wrap._right .nu_dialog` |  show on right |
| `.nu_dialog_wrap._bottom .nu_dialog` |  show on bottom |
| `.nu_dialog_wrap._left .nu_dialog` |  show on left |
| `.nu_dialog_wrap._middle .nu_dialog` |  show on middle |


## Animation?

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
