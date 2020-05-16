# Toast

| npm package| npm downloads |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![github][git-badge]][git-url] |


[npm-badge]: https://img.shields.io/npm/v/@_nu/react-toast.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-toast
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-toast
[git-url]: https://github.com/nu-system/react-toast
[git-badge]: https://img.shields.io/github/stars/nu-system/react-toast.svg?style=social

Component of react toast

<iframe src="https://codesandbox.io/embed/new-night-9e4kp?fontsize=14&hidenavigation=1" title="nu-toast-react" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## Install

```
yarn add @_nu/react-toast
```

### Custom

```JSX
import NuToast from "@_nu/react-toast";
import "./style.css";

const Toast = NuToast.setDefault({
    // 默认值就是这三个，可以自定义
    status:['danger','warning','success'],
    showTime: 3000
});

export default Toast;
export { NuToast };
```

### Use base dom 

```JSX
import React from 'react';
import { NuToast } from "../../components/Toast";

function PageToast() {
    return (
        <div>
            <NuToast open showTime={3000} status="danger">hello!</NuToast>
        </div>
    );
}

export default PageToast;
```

The first is to take the Dom approach directly. 'NuToast' is displayed when the Dom object is created, and then disappears after '3000 milliseconds. This is a good way to show a toast as soon as you enter the page.

### Use base function 

```JSX
import React, { Component } from "react";
import Toast from "./components/Toast";

function App(){
  render() {
    return (
      <div className={`tac`}>
        <button type="button" onClick={()=>{
            Toast('toast default');
        }}>
          显示Toast
        </button> 
        <button type="button" onClick={()=>{
            Toast.danger('toast danger');        
        }}>
          显示Toast danger
        </button>
        <button type="button" onClick={()=>{
            Toast.success('toast danger');        
        }}>
          显示Toast danger
        </button>
        <button type="button" onClick={()=>{
            Toast.warning('toast warning');        
        }}>
          显示Toast danger
        </button>
      </div>
    );
  }
};

export default App;
```

Many times `toast` is triggered after an operation.

`NuToast.setDefault` can help you quickly create your own Toast system in initialization.

Usually our global Toast is the same UI logic, so we only need to create it at initialization time.

`NuToast.setDefault` has three states of '['danger','warning','success']'. Of course, you can create your own Toast system based on your business.

```JSX
import NuToast from "@_nu/react-toast";

const Toast = NuToast.setDefault({
    status:['myToast'],
    showTime: 3000
});

function App(){
  render() {
    return (
      <div>
        <button type="button" onClick={()=>{
            Toast('toast default');
        }}>
          显示Toast
        </button>
        
        <button type="button" onClick={()=>{
            Toast.myToast('toast myToast');
        }}>
          显示Toast
        </button>
      </div>
    );
  }
};

export default App;
```

## NuToast Api

| props   |      type      |       default      |  function |
|:----------|:-------------:|:-------------:|------:|
| children * |  node | null | 内容元素 |
| className * |  string | '' | className |
| status |  string | - | toast 的状态 |
| showTime | number | true | toast 显示的时间 |


## 动效
```jsx
  appear = true,
  unmountOnExit = true,
  timeout = 300,
  classNames = {
    appearActive: '_open',
    appearDone: '_open',
    enter: '_open',
    enterActive: '_open',
    enterDone: '_open',
  },
```

`@ _nu/react - toast` using [the react - the transition - group/CSS - the transition](https://reactcommunity.org/react-transition-group/css-transition) as a CSS animations solution, all in addition to the above custom API, It also simply moves all the attributes of 'css-transition' over to 'NuToast'.

Because `css-transition` still has some cost to get started, the default values above are set for convenience.

In actual development, you just need to develop around the selector `.nu_toast._open`.

## `NuToast.setDefault` Api

| props   |      type      |       default      |  function |
|:----------|:-------------:|:-------------:|------:|
| status |  array  | `['danger', 'warning', 'success']` | 弹窗默认状态 |

For the rest of the props', pass directly to 'NuToast' at creation time.

## Custom style?

[nu-css-toast](https://nu-system.github.io/css/toast/)
