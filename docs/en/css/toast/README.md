# Toast

| npm package| npm downloads| jsdelivr |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] | [![github][git-badge]][git-url] |

[npm-badge]: https://img.shields.io/npm/v/@_nu/css-toast.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-toast
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-toast
[git-url]: https://github.com/nu-system/css-toast
[git-badge]: https://img.shields.io/github/stars/nu-system/css-toast.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-toast/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-toast

CSS toast component.

<iframe height="400" style="width: 100%;" scrolling="no" title="nu-toast" src="//codepen.io/ziven27/embed/mZyprq/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/mZyprq/'>nu-toast</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Install?

```bash
yarn add @_nu/css-toast
```

```HTML
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-toast/css/core.min.css" />
<link src="https://cdn.jsdelivr.net/npm/@_nu/css-toast/css/skins/bootstrap.min.css" />

```

```
@_nu/css-toast/css
├── core.css           // Core
└── skins
    └── bootstrap.css  // skin of bootstrap
```

## Dom

```HTML
<div class="nu_toast">
  <div class="nu_toast_in">
    <!-- here text -->
  </div>
</div>
```


## Api

| Selector   |   Function   |
|:----------|-------------:|
| `.nu_toast._open` |  show or hide |
| `.nu_dialog._[skins]` | skin of toast |

For the design system, we recommend that the UI is convergent, so it is recommended that only '_success', '_warning', '_danger' be implemented.

Of course, if you have custom requirements, it is recommended to use bootstrap color scheme.

`_priamry`,`_secondary`,`_success`,`_warning`,`_danger`,`_info`,`_light`,`_dark`。

## Custom animation?

```css
.nu_toast{
  visibility: hidden;
  opacity: 0;
  transform: translate(0, -10px);
  transition: 200ms;
}

.nu_toast._open {
  visibility: visible;
  opacity: 1;
  transform: translate(0, 0);
}
```

## Custom skin ？

```css
.nu_toast {
  border-radius: .25rem;
  padding: .75rem 1.25rem;
  color: #004085;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
}

.nu_toast._danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.nu_toast._warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.nu_toast._success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
```

## Logic Only

- [nu-react-toast](/react/toast/)
