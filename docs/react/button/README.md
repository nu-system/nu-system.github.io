# Button

[![npm package][npm-badge]][npm-url]
[![npm downloads][npm-downloads]][npm-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-button.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-button
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-button
[git-url]: https://github.com/nu-system/react-button
[git-badge]: https://img.shields.io/github/stars/nu-system/react-button.svg?style=social

No UI dependency button of react.

<iframe src="https://codesandbox.io/embed/throbbing-leftpad-juijc?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FButton.js" title="throbbing-leftpad-juijc" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

English | [简体中文](https://nu-system.github.io/zh/react/button/)

## Install

```
yarn add @_nu/react-button @_nu/css-button
```

- [@\_nu/react-button](https://nu-system.github.io/react/button/): Login only
- [@\_nu/css-button](https://nu-system.github.io/css/button/): UI Just

### Custom

```JSX
/* @components/Button/index.js */
import Button from "@_nu/react-button";
import "@_nu/css-button";     // core style
import "@_nu/css-button/css/skins/bootstrap.css"; // skin of bootstrap
import './style.css'; // custome style

Button.defaultProps.classNameBase = "_fill";  // base className of button

export default Button;
```

### Use

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

## Struct

```JSX
<Component>
    <SubComponent>{children}</SubComponent>
</Component>
```

## Api

| Prop             |               type               | Default  |         Function          |
| :--------------- | :------------------------------: | :------: | :-----------------------: |
| children         |       string &#124; Array        | '&nbsp;' |         children          |
| className        |       string &#124; Array        | '&nbsp;' |         className         |
| classNameDefault |       string &#124; Array        | '\_fill' |     default className     |
| href             |              string              | '&nbsp;' |       href for `a`        |
| disabled         |             boolean              |  false   | disabled status of button |
| Component        | string &#124; func &#124; object | 'button' |          wrapper          |
| SubComponent     | string &#124; func &#124; object |  'span'  |         container         |

```JSX
<Button>hello</Button>
<Button disabled>hello</Button>
<Button className="_primary">hello</Button>
<Button SubComponent="strong">hello</Button>
<Button href="." title="hello">hello</Button>
```

```HTML
<button class="nu_btn _fill" type="button"><span>hello</span></button>
<button class="nu_btn _fill" type="button" disabled><span>hello</span></button>
<button class="nu_btn _primary _fill" type="button"><span>hello</span></button>
<button class="nu_btn _fill" type="button"><strong>hello</strong></button>
<a class="nu_btn _fill" href="." title="hello"><span>hello</span></a>
```

## classNames

```JSX
<Button className="_primary _fill _ghost _primary">hello</Button>
<Button className={['_primary','_fill','_ghost','_primary','','',null]}>hello</Button>
```

```HTML
<button class="nu_btn _primary _ghost" type="button"><span>hello</span></button>
```

- duplicate class will remove;
- `_fill`,`_ghost`,`_link` show on className. only the last one will be render;
- empty will be ignore;

## Use with Link？

```jsx
import { Link } from "@reach/router";
import Button from "@_nu/react-button";
import "@_nu/css-button";
import "./style.css";

// Custom
Button.defaultProps.component = Link;

export default Button;
```

## Custom default className?

```JSX
Button.defaultProps.classNameDefault = "_fill _capsule";

// or

Button.defaultProps.classNameDefault = ["_fill", "_capsule"];
```

## Custom style？

Go to [@\_nu/css-button](https://nu-system.github.io/css/button/)
