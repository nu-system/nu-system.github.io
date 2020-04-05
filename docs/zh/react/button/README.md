# Button

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-button.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-button
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-button
[git-url]: https://github.com/nu-system/react-button
[git-badge]: https://img.shields.io/github/stars/nu-system/react-button.svg?style=social

没有 UI 依赖的按钮组件.

<iframe src="https://codesandbox.io/embed/throbbing-leftpad-juijc?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FButton.js" title="throbbing-leftpad-juijc" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## 安装

```
yarn add @_nu/react-button @_nu/css-button
```

- [@\_nu/react-button](https://nu-system.github.io/react/button/): 逻辑组件
- [@\_nu/css-button](https://nu-system.github.io/css/button/): 样式组件

### 二次封装

```JSX
/* @components/Button/index.js */
import Button from "@_nu/react-button";
import "@_nu/css-button";     // core style
import "@_nu/css-button/css/skins/bootstrap.css"; // skin of bootstrap
import './style.css'; // custome style

Button.defaultProps.classNameBase = "_fill";  // base className of button

export default Button;
```

### 使用

```JSX
import Button from "./components/Button";

const Page=()=>{
    return (
     <div>
        <Button>Button</Button>
        <Button href="/nu-button">Button</Button>
     </div>
    );
};

export default Page;
```

## 结构

```JSX
<Component>
    <ComponentSub>{children}</ComponentSub>
</Component>
```

## Api

| 属性             |               类型               |  默认值  |           功能            |
| :--------------- | :------------------------------: | :------: | :-----------------------: |
| children         |       string &#124; Array        | '&nbsp;' |         children          |
| className        |       string &#124; Array        | '&nbsp;' |         className         |
| classNameDefault |       string &#124; Array        | '\_fill' |     default className     |
| href             |              string              | '&nbsp;' |       href for `a`        |
| disabled         |             boolean              |  false   | disabled status of button |
| Component        | string &#124; func &#124; object | 'button' |          wrapper          |
| ComponentSub     | string &#124; func &#124; object |  'span'  |         container         |

- 如果 `chidren` 不是字符串的化，`ComponentSub` 会用 `<Fragment />` 替代； 
```JS
<Button>hello</Button>
<Button><strong>hello</strong></Button>
<Button disabled>hello</Button>
<Button className="_primary">hello</Button>
<Button ComponentSub="strong">hello</Button>
<Button href="." title="hello">hello</Button>
```

```HTML
<button class="nu_btn _fill" type="button"><span>hello</span></button>
<button class="nu_btn _fill" type="button"><strong>hello</strong></button>
<button class="nu_btn _fill" type="button" disabled><span>hello</span></button>
<button class="nu_btn _fill _primary" type="button"><span>hello</span></button>
<button class="nu_btn _fill" type="button"><strong>hello</strong></button>
<a class="nu_btn _fill" href="." title="hello"><span>hello</span></a>
```

## ClassName 处理

```JSX
<Button className="_primary _fill _ghost _primary">hello</Button>
<Button className={['_primary','_fill','_ghost','_primary','','',null]}>hello</Button>
```

```HTML
<button class="nu_btn _primary _ghost" type="button"><span>hello</span></button>
```

- 重复的 Class 会被移除
- `_fill`,`_ghost`,`_link` 同时出现，只会取最后一个;
- 会去掉空字符串；

## 如何配合路由组件使用？

```jsx
import { Link } from "@reach/router";
import Button from "@_nu/react-button";
import "@_nu/css-button";
import "./style.css";

// 自定义标签
Button.defaultProps.component = Link;

export default Button;
```

## 如何设定默认样式?

```JSX
Button.defaultProps.classNameDefault = "_fill _capsule";

// or

Button.defaultProps.classNameDefault = ["_fill", "_capsule"];
```

## 如何修改样式？

查看样式组件 [@\_nu/css-button](https://nu-system.github.io/zh/css/button/)
