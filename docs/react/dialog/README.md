# Dialog

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/@_nu/react-dialog


<iframe src="https://codesandbox.io/embed/winter-https-jxp4p?fontsize=14&hidenavigation=1" title="nu-dialog-react" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

`NuDialog` 本身不会输出任何样式，所有样式均来自于 [@_nu/css-dialog](https://nu-system.github.io/css/dialog/)。

## 怎么用？

```
$ yarn add @_nu/react-dialog @_nu/css-dialog
```

### 二次封装

在你自己的 `components/` 目录下创建一个 `Dialog` 文件夹

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
// 你自定义的样式
import "./index.css";

export default NuDialog;
```

### 使用
```JSX
import React, { useState } from "react";
import Dialog from "./components/Dialog";

function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        打开弹窗
      </button>
      <Dialog
        open={open}
        className="_middle"
        onClose={() => setOpen(false)}
      >
        <h3>hello world!</h3>
      </Dialog>
    </div>
  );
}

export default App;
```

## Api
| props   |      类型      |       默认值      |  功能 |
|:----------|:-------------:|:-------------:|------:|
| open |  boolean | boolean | 显示弹窗 |
| close | bool or node | null | 关闭按钮显示的图标 |
| closeChildren | boolean,node | null | 关闭按钮子元素 |
| closeTitle | string | 'close' | 关闭按钮 title, 为空不显示关闭按钮 |
| maskTitle | string | 'close' | 遮罩按钮 title, 为空遮罩对对象不可获取焦点 |
| bodyScroll | boolean | false | 显示的时候body是否可以滚动滚动 |
| onClose |  function | - | 关闭的时候执行 |
| onClickMask |  function | 执行 onClose | 当点击了遮罩 |
| onClickClose |  function | 执行 onClose | 当点击了关闭按钮 |
| onEscapeKeyDown |  function | 执行 onClose | 当点击了 ESC 按钮 |
| transProps |  {} | - | CSSTransition 的参数 |

> `onClickMask`, `onClickClose`, `onEscapeKeyDown` 如果返回 false 则不会执行 `onClose`, 其它情况均会执行  

## 动效

```jsx
const {
  appear = true,
  unmountOnExit = true,
  timeout = 1000,
  classNames = {
    enterActive: '_open',
    enterDone: '_open',
  },
  onEntered,
  onExited,
  ...otherTransProps
} = transProps;
```

nu-dialog 采用 [react-transition-group/css-transition](https://reactcommunity.org/react-transition-group/css-transition) 作为CSS动画解决方案。所有`transProps`属性都会直接添加到会直接将 `<CSStransition/>`上。 因为 `<CSStransition/>` 还是有一定的上手成本。

上面的默认参数，可以帮助你在实际开发的时候只需要围绕着 `.nu_dialog_wrap._open` 这个选择器开发即可。

```CSS
.nu_dialog_wrap, .nu_dialog {
    transition: 300ms;
}

.nu_dialog_wrap._middle .nu_dialog {
    transform: translate(0, 20px);
}

.nu_dialog_wrap._open._middle .nu_dialog {
    transform: translate(0, 0);
}
```

## Dom结构

```HTML
<dialog open class="nu_dialog_wrap _middle _open">
    <button tab-index="0" title="遮罩" className="nu_dialog_mask" />
    <section tab-index="-1" class="nu_dialog">
        <button tab-index="0" title="关闭" className="nu_dialog_close" >
          {closeChildre}
        </button>
        {children}
    </section>
</dialog>
```

- **position:** 我们会将 position 的值，在前面添加一个'_' 放到 nu_dialog_wrap 的 class 上。
- **open:** 当 open 为 true 时会在 nu_dialog_wrap 上添加一个 _open 的 class

## 如何自定义样式？

可以查看 [@_nu/css-dialog](https://nu-system.github.io/css/dialog/)