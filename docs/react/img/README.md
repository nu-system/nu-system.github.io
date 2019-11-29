# Img

[![npm package][npm-badge]][npm]
[![github][github-badge]][github]

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-img.svg
[npm]: https://www.npmjs.org/package/@_nu/react-img

[github-badge]: https://img.shields.io/github/stars/nu-system/react-img.svg?style=social
[github]: https://github.com/nu-system/react-img

Enhance the responsive of the vanilla image.

增强 `img` 标签的自适应能力。

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

## Api

| props   | 类型 | 默认值 | 功能 |
|:-----|:-----:|:-----:|:-----:|
| defaultSrc | string | 8*8 base64 transparent image | 图片加载失败显示 |
| src | string | required | img src |
| alt | string | required | img alt |
| width | string, number | required | img width |
| height | string, number | required | img height |
| circle | bool | false | img `border-radius:100%` |
| responsive | false,true,'x','y' | false | 图片是否自适应 |

### `responsive`

- `false`: render img directly;
- `true`: img stretch fill the
- `x`: img `width:100%; height:initial;`
- `y`: img `height:100%; width:initial;`
