# ACSS

[![npm package](https://img.shields.io/npm/v/@_nu/css-button.svg)](https://www.npmjs.org/package/@_nu/css-acss)
[![github](https://img.shields.io/github/stars/nu-system/css-button.svg?style=social)](https://github.com/nu-system/css-acss)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@_nu/css-button/badge)](https://www.jsdelivr.com/package/npm/@_nu/css-acss)

## 这是什么？

[ACSS](http://acss.io/)/ utility-first CSS  构建工具, 帮助你管理你的 CSS。

灵感来自于 [tailwindcss](https://tailwindcss.com/), [quickLayout](https://github.com/zhangxinxu/quickLayout)。

1. `css/core.css` 核心点css 代码可以直接使用;
2. `less/_acss.less` less Mixin 需要初始化;
3. `scss/_acss.scss` sass Mixin 需要初始化;

## 如何使用

```bash
$ npm i @_nu/css-acss;
```

## SCSS

```scss
@import '@_nu/css-acss/scss/_acss.scss';

@include ACSS((
    _core:false,                 // 是否需要 ACSS 核心代码
    _unitExpression: 1/16*1rem,  // 单位换算表达式，默认为 1px
    margin-top:(8, 16),          // .mt8, .mt16
    margin-right:(8,16),         // .mr8, .mr16
    margin-bottom:(8,16),        // .mb8, .mb16
    margin-left:(8,16),          // .ml8, .ml16
    padding-top:(8, 16),         // .pt8, .pt16
    padding-right:(8,16),        // .pr8, .pr16
    padding-bottom:(8,16),       // .pb8, .pb16
    padding-left:(8,16),         // .pl8, .pl16
    font-size:(12,16),           // .fs12, .fs16
    line-height:(16,24),         // .lh16, .lh24
    font-weight:(400,700),       // .fw400, .fw700
    z-index:(
        header: 100,             // .z_header { z-index: 100; }
        toast: 200               // .z_toast { z-index: 200; }
    ),
    color:(
        xl:#111,                 // .c_xl{ color: #111; }
        l:#333,                  // .c_l{ color: #333; }
        m:#666,                  // .c_m{ color: #666; }
        s:#999,                  // .c_s{ color: #999; }
        xs:#DDD,                 // .c_xs{ color: #DDD; }
        primary: blue,           // .c_primary{ color: blue; }
        secondary: gray,         // .c_secondary{ color: gray; }
        danger: red,             // .c_danger{ color: red; }
        warning: yellow,         // .c_warning{ color: yellow; }
        succcess: green,         // .c_succcess{ color: green; }
        info: cadetblue,         // .c_info{ color: cadetblue; }
        light: #f8f9fa,          // .c_light{ color: #f8f9fa; }
        dark: #343a40,           // .c_dark{ color: #343a40; }
    )
));
```

## LESS

```less
@import '@_nu/css-acss/less/_acss.less';

// 是否需要 ACSS 核心代码
// 采用这个方法会帮你默认引入 `css/core.css` 代码
#core; 

/**
 * 命名规则
 * 属性取首字母加上后面的数字
 * @param {list} @list - 属性列表
 * @param {expression} @unit - 单位换算表达式, 默认为1px, 想要 rem 填写 1/16*1rem
 * @warning 注意列表后面的分号不能省略
 */
#marginTop(8, 16;);     // .mt8{ margin-top:8px; }
#marginRight(8, 16;);   // .mr8{ margin-right:8px; }
#marginBottom(8, 16;);  // .mb8{ margin-bottom:8px; }
#marginLeft(8, 16;);    // .ml8{ margin-left:8px; }
#paddingTop(8, 16;);    // .pt8{ padding-top:8px; }
#paddingRight(8, 16;);  // .pr8{ padding-right:8px; }
#paddingBottom(8, 16;); // .pb8{ padding-bottom:8px; }
#paddingLeft(8, 16;);   // .pl8{ padding-left:8px; }
#fontSize(12, 16;);     // .fs12{ font-size:12px; }
#lineHeight(16, 24;);   // .lh16{ line-height:16px; }
#fontWeight(400, 700;); // .fw400{ font-weight:400; }

/**！
 * 以下设计资源，因为 LESS 不支持 map 对象
 * 所以目前提供命名约定来管理
 */

/*！管理颜色 .c_* */
.c_xl{ color: #111; }
.c_l{ color: #333; }
.c_m{ color: #666; }
.c_s{ color: #999; }
.c_xs{ color: #DDD; }
.c_primary{ color: blue; }
.c_secondary{ color: gray; }
.c_danger{ color: red; }
.c_warning{ color: yellow; }
.c_succcess{ color: green; }
.c_info{ color: cadetblue; }
.c_light{ color: #f8f9fa; }
.c_dark{ color: #343a40; }

/*！ 管理层级 .zi_* */
.zi_header{ z-index: 200; }
.zi_toast{ z-index: 300; }
```
因为 LESS 本身语言特性，所以在使用上和 SCSS 有区别，但是核心逻辑是一样的。

## 命名规则

1. 只取首字母 `.db{ display:block; }`; 
2. 有数字直接连接 `.mb10{ margin-bottom:10px; }`; 
3. 百分号用 p（percent）表示 `.w100p{ width:100%; }`; 
4. 小数点用 d（dot）表示 `.lh1d2{ line-height:1.2}`; 
5. 有想要自定义的样式，用 `_` 分割单词; 

`css/core.css` 除了自定的几个样式之外，其余全部严格采用以上模式。
不管是 SCSS 还是 LESS 初始化出来的 CSS 也完全按照这个命名规则。

## CORE

```css
/*! 
* # 命名规则 
* 1. 只取首字母 .db{ display:block; };
* 2. 有数字直接连接 .mb10{ margin-bottom:10px; };
* 3. 百分号用p（percent）表示 .w100p{ width:100%; };
* 4. 小数点用d（dot）表示 .lh1d2{ line-height:1.2};
* 5. 有想要自定义的样式，用_分割单词;
*/
/*! ## scruct  */
.di{display:inline}
.db{display:block}
.dn{display:none}
.dib{display:inline-block}
.oh{overflow:hidden}
.w100p{width:100%}
.h100p{height:100%}
.vam{vertical-align:middle}
/*! ### scruct position */
.pr{position:relative}
.pf{position:fixed}
.pa{position:absolute}
.z1{z-index:1}
.t0{top:0}
.r0{right:0}
.b0{bottom:0}
.l0{left:0}
.t50p{top:50%}
.l50p{left:50%}
.l100p{left:100%}
.t100p{top:100%}
/*! ### scruct float */
.fl{float:left;display:inline}
.fr{float:right}
/*! ### struct flex */
.df{display:flex}
.f1{flex:1}
.fa{flex:auto}
.aic{align-items:center}
.jcc{justify-content:center}
.fdr{flex-direction:row}
.fdc{flex-direction:column}
.jcsb{justify-content:space-between}
.jcsa{justify-content:space-around}
/*! ## style =================== */
.vh{visibility:hidden}
.br100p{border-radius:100%}
/*! ### style font */
.fs0{font-size:0}
.fwn{font-weight:400}
.fwb{font-weight:700}
.fsi{font-style:italic}
.wsn{white-space:nowrap}
.wwbw{word-wrap:break-word;word-break:break-all}
.lh1d5{line-height:1.5}
.lh1d8{line-height:1.8}
.tar{text-align:right}
.tac{text-align:center}
.tal{text-align:left}
.ttu{text-transform:uppercase}
.ttc{text-transform:capitalize}
.ttn{text-transform:none}
.ttl{text-transform:lowercase}
.tdn{text-decoration:none}
/*! ### style color */
.c_fff{color:#fff}
.c_000{color:#000}
.bc_fff{background-color:#fff}
/*! 
    * 以下属性因为太常用所有放在了这里 
    * 这里的命名并没有严格按照上面的规则
    */
/*! 清除浮动 */
.clearfix:after{display:table;content:'';clear:both}
/*! 文字超出一行点点点 */
.ell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
```
