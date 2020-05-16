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

export default Button;
```

### Use

```JSX
import React, { useState } from 'react';
import Button, { ButtonClassProvider } from '../Button';

const Page=()=>{
    const [buttonThemeClass, setButtonThemeClass] = useState('theme_class1');
    const onThemeChange = e => {
        setButtonThemeClass(e.currentTarget.value);
    };
    return (
        <ButtonClassProvider value={buttonThemeClass}>
            <div>
                <select onChange={onThemeChange}>
                    <option value="theme_class1">theme1</option>
                    <option value="theme_class2">theme2</option>
                </select>
                <Button className="nu_btn">Button</Button>
                <Button className="nu_btn" href="/nu-button">Button</Button>
            </div>
        </ButtonClassProvider>
    );
};

export default Page;
```

## Api

| Prop             |               type               | Default  |         Function          |
| :--------------- | :------------------------------: | :------: | :-----------------------: |
| children         |       string &#124; Array        | '&nbsp;' |         children          |
| className        |       string &#124; Array        | '&nbsp;' |         className         |
| href             |              string              | '&nbsp;' |       href for `a`        |
| disabled         |             boolean              |  false   | disabled status of button |
| Component        | string &#124; func &#124; object | 'button' |          wrapper          |

```JSX
<Button className="nu_btn _fill">hello</Button>
<Button className="nu_btn _fill"><strong>hello</strong></Button>
<Button className="nu_btn _fill" disabled>hello</Button>
<Button className="nu_btn _fill _primary">hello</Button>
<Button className="nu_btn _fill _primary" href="." title="hello">hello</Button>
```

=>

```HTML
<button class="nu_btn _fill" type="button" title="hello">hello</button>
<button class="nu_btn _fill" type="button"><strong>hello</strong></button>
<button class="nu_btn _fill" type="button" disabled title="hello">hello</button>
<button class="nu_btn _primary _fill" type="button" title="hello">hello</button>
<button class="nu_btn _fill _primary" type="button" title="hello">hello</button>
<a class="nu_btn _fill _primary" href="." title="hello">hello</a>
```

## Custom style？

Go to [@\_nu/css-button](https://nu-system.github.io/css/button/)

## test

```
// How to start
npm test
```

```
// generate coverage report
npm run test:coverage
```
