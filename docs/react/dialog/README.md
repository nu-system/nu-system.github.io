# Dialog

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/@_nu/react-dialog


<iframe src="https://codesandbox.io/embed/winter-https-jxp4p?fontsize=14&hidenavigation=1" title="nu-dialog-react" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


NU 「 no-ui 」 组件库系统 nu-system，弹窗组件 React 实现。

`NuDialog` 本身不会输出任何样式，所有样式均来自于 [nu-dialog](https://nu-system.github.io/vanilla/dialog/)。

## 怎么用？

```
$ yarn add @_nu/react-dialog @_nu/vanilla-dialog
```

### 二次封装

```JSX
import NuDialog from "@_nu/react-dialog";
import "@_nu/vanilla-dialog";
import "@_nu/vanilla-dialog/css/position/middle.css";
// import "@_nu/vanilla-dialog/css/position/top.css";
// import "@_nu/vanilla-dialog/css/position/right.css";
// import "@_nu/vanilla-dialog/css/position/bottom.css";
// import "@_nu/vanilla-dialog/css/position/left.css";

export default NuDialog;
```

### 使用
```JSX
import React, { useState } from "react";
import Dialog from "./components/Dialog";

function Demo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState('middle');
  return (
    <div>
      <select
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      >
        <option value="middle">居中显示</option>
        <option value="top">居上显示</option>
        <option value="left">居左显示</option>
        <option value="right">居右显示</option>
        <option value="bottom">居底显示</option>
      </select>
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
        position={position}
        onClickClose={() => {
          setOpen(false);
        }}
        onClickMask={() => {
          setOpen(false);
        }}
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
| position |  string | 'middle' | 弹窗位置 |
| close | bool or node | `<Fragment>&times;</Fragment>` | 关闭按钮显示的图标 |
| stopScroll | boolean | true | 是否显示的时候阻止滚动条 |
| onClickMask |  function | - | 当点击了遮罩 |
| onClickClose |  function | - | 当点击了关闭按钮 |

## 动效

```jsx
  appear = true,
  unmountOnExit = true,
  timeout = 300,
  classNames = {
    enterActive: '_open',
    enterDone: '_open',
  },
```

nu-dialog 采用 [react-transition-group/css-transition](https://reactcommunity.org/react-transition-group/css-transition) 作为CSS动画解决方案，所有除了以上自定义的 API 之外，还会直接将 `css-transition` 所有的属性都移接到 `nu-dialog` 上。 
因为 `css-transition` 还是有一定的上手成本，这边为了方便使用直接设定了如上的默认值。
在实际开发的时候只需要围绕着 `.nu_dialog_wrap._open` 这个选择器开发即可。

```
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

```
<div class="nu_dialog_wrap _[position] _open">
    <label title="mask" className="nu_dialog_mask"/>
    <div class="nu_dialog">
        <label title="close" className="nu_dialog_close" >{close}</label>
        {children}
    </div>
</div>
```

- **position:** 我们会将position 的值，在前面添加一个'_' 放到 nu_dialog_wrap 的 class 上。
- **open:** 当 open 为true 时会在 nu_dialog_wrap 上添加一个 _open 的class

## 如何自定义样式？

可以查看 [nu-dialog](https://nu-system.github.io/vanilla/dialog/)
