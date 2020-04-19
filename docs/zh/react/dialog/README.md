# Dialog

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-dialog.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-dialog
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-dialog
[git-url]: https://github.com/nu-system/react-dialog
[git-badge]: https://img.shields.io/github/stars/nu-system/react-dialog.svg?style=social

一个兼顾无障碍范围，易用性，且没有 UI 依赖的 React 对话框组件.

`@_nu/react-dialog` 本身不会输出任何样式，所有 demo 样式均来自于[@\_nu/css-dialog](https://nu-system.github.io/css/dialog/)。

<iframe src="https://codesandbox.io/embed/winter-https-jxp4p?fontsize=14&hidenavigation=1" title="nu-dialog-react" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## 安装

```
$ npm install @_nu/react-dialog @_nu/css-dialog
# or
$ yarn add @_nu/react-dialog @_nu/css-dialog
```

## 二次封装

在你的项目组件库文件夹中创建一个新的 Dialog 组件.

```
components/
   └── Dialog/
       ├── index.js
       └── style.css
```

```JSX
// components/Dialog/index.js
import NuDialog from "@_nu/react-dialog";
import "@_nu/css-dialog";
import "@_nu/css-dialog/css/position/middle.css";
// 自定义你的弹窗样式
import "./index.css";

export default NuDialog;
```

## 使用

```JSX
import React, { useState } from "react";
import Dialog from "./components/Dialog";

function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        open
      </button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <h3>hello world!</h3>
        <p>Happy to see you again.</p>
      </Dialog>
    </div>
  );
}
export default App;
```

## Dom

```JSX
<dialog open tab-index="-1" class="nu_dialog_wrap">
  <Mask title={maskTitle} className="nu_dialog_mask" />
  <section class="nu_dialog">
      {children}
      <Close title={closeTitle} className="nu_dialog_close" />
  </section>
</dialog>
```

## Api

```JSX
Dialog.defaultProps={
  className = "",
  children = null,
  open = false,
  active = true,
  lockScroll = true,
  maskTitle = "Mask",
  removeTime = 200,
  disabledPortal = false,
  disableEsc = false,
  closeTitle = "Close",
  closeChildren = <Fragment>&times;</Fragment>,
  onClose = () => {},
  onClickMask = () => {}
};

Dialog.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,
  /**
   * if `> 0`, hide dialog and remove dialog after removeTime
   * else if `0`, remove dialog immediately
   * else, keep exit after hide
   */
  removeTime: PropTypes.number,
  /**
   * If `true`, the dialog go through the enter, entring, enterd.
   * If `false`, the dialog go through the exitring, exitred.
   */
  open: PropTypes.bool,
  /**
   * If `true`, the dialog can focusable
   * If `false`, the dialog blur
   */
  active: PropTypes.bool,
  /**
   * Callback fired when dialog close.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the `Mask` is clicked.
   * if return `false`, no longer trigger onclick
   * else trigger the onClose
   */
  onClickMask: PropTypes.func,
  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: PropTypes.bool,
  /**
   * If `true`, the dialog will render where it is defined
   */
  disabledPortal: PropTypes.bool,
  /**
   * If `true`, the dialog will not close when click esc
   */
  disableEsc: PropTypes.bool,
  /**
   * title of the `Close`.
   * If empty string, the `Close` do not render
   */
  closeTitle: PropTypes.string,
  /**
   * title of the mask element.
   * If empty string, the mask do not render
   */
  maskTitle: PropTypes.string,
  /**
   * Close children
   */
  closeChildren: PropTypes.node
};
```

### Transition

```CSS
.nu_dialog {
  transform: translate(0, -50px);
}
._top .nu_dialog {
  transform: translate(0, -50px);
}
._bottom .nu_dialog {
  transform: translate(0, 50px);
}
._right .nu_dialog {
  transform: translate(50px, 0);
}
._left .nu_dialog {
  transform: translate(-50px, 0);
}
```

你只需要定义 `.nu_dialog` 的起点状态即可。

## 贡献与开发

这个项目是与贡献者行为准则一起发布的。参与本项目，代表您同意遵守其条款。

运行 demo `npm start`.

## 技术方案

`@_nu/react-dialog` 灵感来自以下几个优秀的开源框架：

- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal)
- [focus-trap-react](https://github.com/davidtheclark/focus-trap-react)
- [material-ui](https://material-ui.com/zh/components/modal/)
- [nu-system](https://nu-system.github.io/)