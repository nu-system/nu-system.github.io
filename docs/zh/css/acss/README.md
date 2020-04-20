# ACSS

| npm package| npm downloads| jsdelivr |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![jsdelivr][jsdelivr-badge]][jsdelivr-url] | [![github][git-badge]][git-url] |


[npm-badge]: https://img.shields.io/npm/v/@_nu/css-acss.svg
[npm-url]: https://www.npmjs.org/package/@_nu/css-acss
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/css-acss
[git-url]: https://github.com/nu-system/css-acss
[git-badge]: https://img.shields.io/github/stars/nu-system/css-acss.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/@_nu/css-acss/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@_nu/css-acss

## 这是什么？

[ACSS](http://acss.io/)/ utility-first CSS / Functional CSS 构建工具, 帮助你管理你的 CSS。

灵感来自于 [ACSS](http://acss.io/), [tailwindcss](https://tailwindcss.com/), [quickLayout](https://github.com/zhangxinxu/quickLayout)。

```bash
.
├── demo               // 完整的示例，可以直接复制，修改参数，使用
│   ├── index.html
│   ├── less.css
│   ├── less.less
│   ├── scss.css
│   └── scss.scss
└── lib
    ├── _acss.less      // less Mixin 需要使用 `#ACSS;` 初始化
    ├── _acss.scss      // sass Mixin 需要使用 ``@include ACSS;` 初始化
    └── acss.css        // 核心点 css 代码引用，使用即可
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
        font: inherit;
        color: inherit;
      }
    </style>
    <link rel="stylesheet" href="../scss/demo.css" />
  </head>
  <body style="background-color: #333333;">
    <section class="pt16 pr16 pb16 pl16 fs12 bc_fff mt16 mr16 ml16 mb16">
      <h2 class="fw700 mb16 fs16">CSS-ACSS</h2>
      <p class="mb8">ACSS / utility-first CSS 构建工具, 帮助你管理你的 CSS。</p>
      <p>
        <strong class="fw700">灵感来自于</strong>
        <a href="http://acss.io/" class="c_primary">acss.io</a>
        <a href="https://tailwindcss.com/" class="c_primary">tailwindcss</a>
        <a href="https://github.com/zhangxinxu/quickLayout" class="c_primary"
          >quickLayout</a
        >
      </p>
    </section>
  </body>
</html>
```

![img](data:image/png;base64,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)

## 如何使用

```bash
$ npm i @_nu/css-acss;
```

### `../lib/acss.css`

```css
/*! ## scruct  */
.di {
  display: inline;
}
.db {
  display: block;
}
.dn {
  display: none;
}
.dib {
  display: inline-block;
}
.oh {
  overflow: hidden;
}
.w100p {
  width: 100%;
}
.h100p {
  height: 100%;
}
.vam {
  vertical-align: middle;
}
/*! ### scruct position */
.pr {
  position: relative;
}
.pf {
  position: fixed;
}
.pa {
  position: absolute;
}
.z1 {
  z-index: 1;
}
.t0 {
  top: 0;
}
.r0 {
  right: 0;
}
.b0 {
  bottom: 0;
}
.l0 {
  left: 0;
}
.t50p {
  top: 50%;
}
.l50p {
  left: 50%;
}
.l100p {
  left: 100%;
}
.t100p {
  top: 100%;
}
.mla {
  margin-left: auto;
}
.mra {
  margin-right: auto;
}
/*! ### scruct float */
.fl {
  float: left;
  display: inline;
}
.fr {
  float: right;
}
/*! ### struct flex */
.df {
  display: flex;
}
.dif {
  display: inline-flex;
}
.f1 {
  flex: 1;
}
.fa {
  flex: auto;
}
.aic {
  align-items: center;
}
.aife {
  align-item: flex-end;
}
.aifs {
  align-item: flex-start;
}
.fdr {
  flex-direction: row;
}
.fdc {
  flex-direction: column;
}
.fww {
  flex-wrap: wrap;
}
.jcsb {
  justify-content: space-between;
}
.jcsa {
  justify-content: space-around;
}
.jcc {
  justify-content: center;
}
.jcfe {
  justify-content: flex-end;
}
/*! ## style =================== */
.vh {
  visibility: hidden;
}
.br100p {
  border-radius: 100%;
}
/*! ### style font */
.fs0 {
  font-size: 0;
}
.fwn {
  font-weight: 400;
}
.fwb {
  font-weight: 700;
}
.fsi {
  font-style: italic;
}
.wsn {
  white-space: nowrap;
}
.wwbw {
  word-wrap: break-word;
  word-break: break-all;
}
.lh1d5 {
  line-height: 1.5;
}
.lh1d8 {
  line-height: 1.8;
}
.tar {
  text-align: right;
}
.tac {
  text-align: center;
}
.tal {
  text-align: left;
}
.ttu {
  text-transform: uppercase;
}
.ttc {
  text-transform: capitalize;
}
.ttn {
  text-transform: none;
}
.ttl {
  text-transform: lowercase;
}
.tdn {
  text-decoration: none;
}
/*! ### style color */
.c_fff {
  color: #fff;
}
.c_000 {
  color: #000;
}
.bc_fff {
  background-color: #fff;
}
/*!
  * 以下属性因为太常用所有放在了这里
  * 这里的命名并没有严格按照上面的规则
  */
/*! 清除浮动 */
.clearfix:after {
  display: table;
  content: "";
  clear: both;
}
/*! 文字超出一行点点点 */
.ell {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### `../lib/_acss.scss`

```scss
// @import '@_nu/css-acss/lib/_acss.scss';
@import "../lib/_acss.scss";

@include ACSS; // ACSS 核心代码，等价于引用 `css/acss.css`
@include ACSS_(
  margin,
  (8, 16),
  1px
); // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
@include ACSS_(
  padding,
  (8, 16),
  1px
); // .pt8, .pr8, .pb8, .pl8, .pt16, .pr16, .pb16, .pl16;
@include ACSS_(font-size, (12, 16), 1px); // .fs12, .fs16
@include ACSS_(line-height, (8, 16), 1px); // .lh16, .lh24
@include ACSS_(font-weight, (400, 700)); // .fw400, .fw700

// 自定义方法
@include ACSS_(
  width,
  (
    w50p: 50%,
    // .w50p { width: 50%; }
      w100p: 100% // .w100p { width: 100%; }
  )
);

@include ACSS_(
  z-index,
  (
    zi_header: 100,
    // .zi_header { z-index: 100; }
      zi_toast: 200 // .zi_toast { z-index: 200; }
  )
);

@include ACSS_(
  color,
  (
    c_xl: #111,
    // .c_xl{ color: #111; }
      c_l: #333,
    // .c_l{ color: #333; }
      c_m: #666,
    // .c_m{ color: #666; }
      c_s: #999,
    // .c_s{ color: #999; }
      c_xs: #ddd,
    // .c_xs{ color: #DDD; }
      c_primary: blue,
    // .c_primary{ color: blue; }
      c_secondary: gray,
    // .c_secondary{ color: gray; }
      c_danger: red,
    // .c_danger{ color: red; }
      c_warning: yellow,
    // .c_warning{ color: yellow; }
      c_succcess: green,
    // .c_succcess{ color: green; }
      c_info: cadetblue,
    // .c_info{ color: cadetblue; }
      c_light: #f8f9fa,
    // .c_light{ color: #f8f9fa; }
      c_dark: #343a40,
    // .c_dark{ color: #343a40; }
  )
);
```

### `../lib/_acss.less`

```less
// @import '@_nu/css-acss/lib/_acss.less';
@import "../lib/_acss.less";

#ACSS; // ACSS 核心代码，等价于引用 `css/acss.css`

/*!
 * 命名规则
 * 属性取首字母加上后面的数字
 * @param {list} @list - 属性列表
 * @param {expression} @unit - 单位换算表达式, 默认为1px, 想要 rem 填写 1/16*1rem
 * @warning 注意列表后面的分号不能省略
 */
#ACSS.margin(8, 16; 1px); // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
#ACSS.padding(
  8,
  16; 1px
); // .pt8, .pr8, .pb8, .pl8, .pt16, .pr16, .pb16, .pl16;
#ACSS.fontSize(12, 16; 1px); // .fs12{ font-size:12px; }
#ACSS.lineHeight(16, 24; 1px); // .lh16{ line-height:16px; }
#ACSS.fontWeight(400, 700;); // .fw400{ font-weight:400; }

/*!
 * 以下设计资源，因为 LESS 不支持 map 对象
 * 所以目前提供命名约定来管理
 */

/*!
 * 管理层级 .zi_*
 */
.zi_header {
  z-index: 200;
}
.zi_toast {
  z-index: 300;
}

/*!
 * 管理颜色 .c_*
 */
.c_xl {
  color: #111;
}
.c_l {
  color: #333;
}
.c_m {
  color: #666;
}
.c_s {
  color: #999;
}
.c_xs {
  color: #ddd;
}
.c_primary {
  color: blue;
}
.c_secondary {
  color: gray;
}
.c_danger {
  color: red;
}
.c_warning {
  color: yellow;
}
.c_succcess {
  color: green;
}
.c_info {
  color: cadetblue;
}
.c_light {
  color: #f8f9fa;
}
.c_dark {
  color: #343a40;
}
```

## ACSS 命名规则

1. 只取首字母 `.db{ display:block; }`;
2. 有数字直接连接 `.mb10{ margin-bottom:10px; }`;
3. 百分号用 p（percent）表示 `.w100p{ width:100%; }`;
4. 小数点用 d（dot）表示 `.lh1d2{ line-height:1.2}`;
5. 有想要自定义的样式，用 `_` 分割单词;

`css/core.css` 除了自定的几个样式之外，其余全部严格采用以上模式。
不管是 SCSS 还是 LESS 初始化出来的 CSS 也完全按照这个命名规则。
