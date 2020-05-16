# Img

| npm package| npm downloads |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![github][git-badge]][git-url] |


[npm-badge]: https://img.shields.io/npm/v/@_nu/react-img.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-img
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-img
[git-url]: https://github.com/nu-system/react-img
[git-badge]: https://img.shields.io/github/stars/nu-system/react-img.svg?style=social

Enhance vanilla image of the responsive and ability on error.


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

| props   | type | default | function |
|:-----|:-----:|:-----:|:-----:|
| src | string | required | img src |
| alt | string | required | img alt |
| width | string, number | required | img width |
| height | string, number | required | img height |

Just the `img` api but the `width` and `height` is required.

## Enhance Api

| props   | type | default | function |
|:-----|:-----:|:-----:|:-----:|
| errorBg | base64Url, color | 8*8 base64 transparent png | img load error |
| circle | bool | false | img `border-radius:100%` |
| responsive | bool,'x','y' | false | img is responsive |

### `responsive`

- `false`: render img directly;
- `true`: img stretch fill the box;
- `x`: img `width:100%; height:initial;`;
- `y`: img `height:100%; width:initial;`;
