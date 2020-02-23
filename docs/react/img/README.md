# Img

[![npm package][npm-badge]][npm]
[![github][github-badge]][github]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-img.svg
[npm]: https://www.npmjs.org/package/@_nu/react-img

[github-badge]: https://img.shields.io/github/stars/nu-system/react-img.svg?style=social
[github]: https://github.com/nu-system/react-img

Enhance vanilla image of the responsive and ability on error.

增强 `img` 标签的自适应和错误占位能力。

<iframe
     src="https://codesandbox.io/embed/nu-react-img-ibg01?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="nu-react-img"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
   
<a target="_blank" href="https://codesandbox.io/s/nu-react-img-ibg01?fontsize=14&hidenavigation=1&theme=dark">
  <img alt="Edit nu-react-img" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## how to use

```JSX
import React from 'react'
import {render} from 'react-dom';
import NuImg from "@_nu/react-img";

function Demo() {
    return (
        <div>
            <h2>react-img Demo</h2>
            <p>Enhance the responsive of the vanilla image.</p>
            <h3>⬇️ img Vallina ⬇️</h3>
            <NuImg width={60} height={80} alt="bookCover" src="https://placem.at/places?w=120&h=160"/>
            <NuImg circle width={60} height={60} alt="avatar" src="https://placem.at/places?w=120&h=120"/>
            <NuImg width={60} height={80} src="./error.png" alt="bookCover"/>
            <h3>⬇️ img custom errorBg ⬇️</h3>
            <NuImg errorBg width={60} height={80} src="./error.png" alt="bookCover"/>
            <NuImg errorBg="#dddddd" width={60} height={80} src="./error.png" alt="bookCover"/>
            <h3>⬇️ img responsive ⬇️</h3>
            <NuImg responsive width={60} height={60} src="https://placem.at/places?w=300&h=300" alt="bookCover"/>
            <h3>⬇️ img responsive y ⬇️</h3>
            <NuImg responsive="y" width={60} height={40} alt="bookCover" src="https://placem.at/places?w=200&h=400"/>
            <h3>⬇️ img responsive x ⬇️</h3>
            <NuImg responsive="x" width={80} height={70} alt="bookCover" src="https://placem.at/places?w=400&h=200"/>
        </div>
    )
}
export default Demo;
```

## Vanilla Img Api

| props   | 类型 | 默认值 | 功能 |
|:-----|:-----:|:-----:|:-----:|
| src | string | required | img src |
| alt | string | required | img alt |
| width | string, number | required | img width |
| height | string, number | required | img height |

Just the `img` api but the `width` and `height` is required.

## Enhance Api

| props   | 类型 | 默认值 | 功能 |
|:-----|:-----:|:-----:|:-----:|
| errorBg | base64Url, color | 8*8 base64 transparent png | 图片加载失败显示 |
| circle | bool | false | img `border-radius:100%` |
| responsive | bool,'x','y' | false | 图片是否自适应 |

### `responsive`

- `false`: render img directly;
- `true`: img stretch fill the box;
- `x`: img `width:100%; height:initial;`;
- `y`: img `height:100%; width:initial;`;