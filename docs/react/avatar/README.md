# Avatar

| npm package                          | npm downloads                              | jsdelivr                                    | github                          |
| ------------------------------------ | ------------------------------------------ | ------------------------------------------- | ------------------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] | [![github][git-badge]][git-url] |

[npm-badge]: https://img.shields.io/npm/v/@_nu/react-avatar.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-avatar
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-avatar
[git-url]: https://github.com/nu-system/react-avatar
[git-badge]: https://img.shields.io/github/stars/nu-system/react-avatar.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/react-avatar/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/react-avatar

<iframe
     src="https://codesandbox.io/embed/nu-react-avatar-6eg15?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="nu-react-avatar"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
## 安装

```
yarn add @_nu/react-avatar @_nu/css-acss
```

- [@\_nu/react-avatar](https://nu-system.github.io/react/avatar/): 实现逻辑
- [@\_nu/css-acss](https://nu-system.github.io/css/acss/): 实现样式

### HTML

```html
<nu-avatar data-size="40">
  <nu-avatar-ph />
  <img alt="hello" src="/avatar.717cf745.jpg" width="40" height="40" />
</nu-avatar>
```

## 二次封装

```JSX
/* @components/Avatar/index.js */

import Avatar from "@_nu/react-avatar";
import "@_nu/css-acss";
// custome style
// import './style.css';

export default Avatar;
```

```css
/* @components/Avatar/style.css */

nu-avatar {
  background-color: #dddddd;
}
nu-avatar[data-size="24"] {
  width: 24px;
}
nu-avatar[data-size="32"] {
  width: 32px;
}
nu-avatar[data-size="40"] {
  width: 40px;
}
nu-avatar[data-size="48"] {
  width: 48px;
}
```

## 使用

```JSX
import React from 'react';
import Avatar from "./components/Avatar";
import imgAvatar from '../avatar.jpg';


const AvatarDefault = ({ className = null }) => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64zm0 160a144 144 0 1 1-144 144 143.68 143.68 0 0 1 144-144zm256 573.44a381.76 381.76 0 0 1-512 0v-18.56A166.4 166.4 0 0 1 416 608h192a166.72 166.72 0 0 1 160 169.92v19.52z" />
  </svg>
);

const Page=()=>{
    return (
     <div>
      <Avatar src={imgAvatar} alt="hello" size={null} />
      <Avatar src={imgAvatar} alt="hello" size={24} />
      <Avatar src={imgAvatar} alt="hello" size={40} />
      <Avatar src={imgAvatar} alt="hello" size={32} />
      <Avatar errorBg={AvatarDefault} src="123" alt="hello" />
     </div>
    );
};

export default Page;
```

## 接口

| 属性      |               类型               | 默认值 |     作用     |
| :-------- | :------------------------------: | :----: | :----------: |
| children  |               node               |   -    |    子元素    |
| className |              string              |   -    |    class     |
| src       |              string              |   -    |   图片地址   |
| alt       |        string.isRequired         |   -    |   图片描述   |
| size      |       string &#124; number       |  '40'  | Avatar 尺寸  |
| errorBg   | string &#124; func &#124; Object |   -    | 图片加载失败 |

- size：`size={null}` 表示头像会撑满整个容器
- errorBg: `string` 表示图片加载失败用这个作为占位图，

## 更多

- [nu-system](https://nu-system.github.io/)
- [@\_nu/css-acss](https://nu-system.github.io/css/acss/)
