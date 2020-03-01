# Dialog

[![npm package][npm-badge]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm-url]: https://www.npmjs.org/package/@_nu/react-dialog
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-dialog?style=flat-square

A fully accessible、flexible、unstyled React dialog component.

**nu-react-dialog** dose not output any style, All the style comes from [@_nu/css-dialog](https://nu-system.github.io/css/dialog/)。

<iframe src="https://codesandbox.io/embed/winter-https-jxp4p?fontsize=14&hidenavigation=1" title="nu-dialog-react" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Installation

```
$ npm install @_nu/react-dialog @_nu/css-dialog
# or
$ yarn add @_nu/react-dialog @_nu/css-dialog
```

## Custome

Creact a new component dialog in your components file.

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
// your custom style
import "./index.css";

export default NuDialog;
```

## Usage

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
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import FocusTrap from "focus-trap-react";
import DialogDom from "./DialogDom";
import Portal from "./Portal";

function Dialog({
  children = null,
  open = false,
  onClose = function() {},
  scrollLock = true,
  disabledPortal = false,
  transProps = {},
  trapProps = {},
  ...otherProps
}) {
  {/* something eles*/}
  return (
    <Portal disabled={disabledPortal}>
      <CSSTransition {...transProps}>
        <FocusTrap {...trapProps}>
          <DialogDom {...otherProps}>
            {children}
          </DialogDom>
        </FocusTrap>
      </CSSTransition>
    </Portal>
  );
}

Dialog.propTypes = {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,
  /**
   * If `true`, the dialog go through the enter, entring, enterd.
   * If `false`, the dialog go through the exitring, exitred.
   */
  open: PropTypes.bool,
  /**
   * Callback fired when diglog close.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  scrollLock: PropTypes.bool,
  /**
   * If `true`, the dialog will render where it is defined
   */
  disabledPortal: PropTypes.bool,
  /**
   * Props applied to the close element.
   */
  Close: PropTypes.object,
  /**
   * title of the mask element.
   */
  closeTitle: PropTypes.string,
  /**
   * Props applied to the mask element.
   */
  Mask: PropTypes.object,
  /**
   * title of the mask element.
   */
  maskTitle: PropTypes.string,
  /**
   * All the props of CSSTransition
   * https://github.com/reactjs/react-transition-group
   */
  transProps: PropTypes.object,
  /**
   * All the props of focus-trap-react
   * https://github.com/davidtheclark/focus-trap-react
   */
  trapProps: PropTypes.object
};

export default Dialog;
```

### Animation

```jsx
// import { CSSTransition } from "react-transition-group";
<CSSTransition
  appear
  unmountOnExit={true}
  timeout={300}
  in={open}
  classNames={{}}
  {...transProps}
>
  {children}
</CSSTransition>
```

`CSSTransition`: [API](https://github.com/reactjs/react-transition-group), [demo](https://reactcommunity.org/react-transition-group/css-transition)

`react-transition-group` is the animation selution we used. 

For ease of use, we use `open` attribute instead the CSS selecter. so you can define the css transition as follow.

```CSS
/* opacity in */
.nu_dialog_wrap{
  transition: 300ms;
  visibility: hidden;
  opacity: 0;
}
.nu_dialog_wrap[open]{
  visibility: visible;
  opacity: 1;
}

/* in from bottom to top */
.nu_dialog_wrap .nu_dialog {
  transition: 300ms;
  transform: translateY(20px);
}
.nu_dialog_wrap[open] .nu_dialog {
  transform: translateY(0);
}
```

> You still can control the whole trasition time line with `transProps` as the official description.

## Contributing & Development

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Run the demos with `npm start`.

## Prior art

`@_nu/react-dialog` was build on those awesome projects: 

- [react-aria-modal](https://github.com/davidtheclark/react-aria-modal)
- [focus-trap-react](https://github.com/davidtheclark/focus-trap-react)
- [react-transition-group/](http://reactcommunity.org/react-transition-group/)
- [material-ui](https://material-ui.com/zh/components/modal/)
- [nu-system](https://nu-system.github.io/)
