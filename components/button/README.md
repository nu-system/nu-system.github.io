## 这是什么？

无 UI 依赖组件库 YF，因为其自身并没有自带任何表现型样式，但是限制了规范和拓展方式。所以YF组件库更像是一个组件库的 style guide。

[DEMO展示](https://yued-fe.github.io/yf-button/)

## API

YF-Button 原生的样式逻辑。

```HTML
<a href="##" class="yf_btn _primary _ghost _large">按钮</a>
```

- **功能**: default、primary、secondary、warning、success、danger
- **状态**: disabled、loading
- **尺寸**: large、middle、small
- **形状**: fill、ghost、link
- **其它**：block、circle、capsule

| 属性   |      对应class      |  功能 |
|----------|:-------------|------:|
| class |  .yf_btn | 默认的按钮选择器 |
| default |  ._default | 默认主题样式 |
| primary |  ._primary | 主按钮 |
| secondary |  ._secondary | 次级按钮 |
| warning |  ._warning | 警告按钮 |
| success |  ._success | 成功按钮 |
| danger |  ._danger | 危险按钮 |
| disabled |  ._disabled,:disabled | 不可用按钮 |
| loading |  ._loading | loading按钮 |
| large |  ._large | 大号按钮 |
| middle |  ._middle | 中号按钮 |
| small |  ._small | 小号按钮 |
| capsule |  ._capsule | 圆角按钮 |
| fill |  ._fill | 实心按钮 |
| ghost |  ._ghost | 幽灵按钮 |
| link |  ._link | 链接按钮 |
| block |  ._block | 占一行的按钮 |
| circle |  ._circle| 正圆按钮 |

YF-button 的样式逻辑很简单就是以上所有的 boolean 属性，会添加一个`_`前缀添加到 class 里。

我们在使用的时候只需要围绕这个选择器进行开发即可。


## 怎么用

```
$ cnpm install @yuewen/yf-button
```

```
<link src="@yuewen/yf-button/css/style.css" />
<link src="@yuewen/yf-button/css/loading.css" />
<link src="@yuewen/yf-button/css/skins/default.css" />
```

然后在页面应用 css 文件即可。这个目录里面还自带一个loading的皮肤，和四个第三方的皮肤。

## 如何修改主题？

```
._primary{
    background-color:blue;
    color:blue;
}
```

需要同时设置背景颜色和文字颜色，对于兼容 fill, ghost 以及link的样式组件内部已经实现好了。

## 如何修改大小？

```
.yf_btn._large {
  height: 48px;
  line-height: 48px;
  padding: 0 32px;
  font-size: 20px;
}

/*需要同时设定正圆的样式*/
.yf_btn._large._circle{
  width: 48px;
  height: 48px;
}
```

## 如何修改状态？

```
.yf_btn:disabled,
.yf_btn._disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

## 皮肤

因为YF组件库，不带任何UI所以理论上，它可以刷成任意UI。

### Default
<iframe frameborder="0" src="./pages/default.html" height="600" width="100%"></iframe>

### Bootstrap
<iframe frameborder="0" src="./pages/bootstrap.html" height="600" width="100%"></iframe>

### Material
<iframe frameborder="0" src="./pages/material.html" height="600" width="100%"></iframe>

### Webnovel
<iframe frameborder="0" src="./pages/webnovel.html" height="600" width="100%"></iframe>

