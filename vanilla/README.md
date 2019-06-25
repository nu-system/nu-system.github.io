# nu-vanilla

## 创建

以下以 `button` 组件为例，解释目录结构和规则。

```bash
nu-system/packages/button
├── README.md           // 介绍你的组件  
├── css                 // build 目录
│   ├── core.css       // 提供 UI Core 代码
│   └── skins          // 提供 Skin library 
│       └── **.css
└── package.json        // 组件配置
```

实际创建将 `button` 修改为你的组件名即可。

## 构建

对于 UI 部分，我们目前采用 [koala](http://koala-app.com/index-zh.html) 作为构建工具。

你只需要将 `./nu-system/packages` 下的组件拖入 koala ，按照以下配置即可。 

它就会将对应的样式文件夹构建到对应 css 目录。不管是`less`还是 `sass`。

![koalo](../.vuepress/public/koala.png)

当然你也可以用你自己喜欢的工具构建你的样式，只是 `dist` 文件要叫 `css` 即可。

## 发布

```json
{
  "name": "@y-fe/nu-[component]",
  "version": "0.0.1",
  "description": "No UI 组件库系统 nu-system, 弹窗组件",
  "main": "css/core.css",
  "repository": "git@github.com:yued-fe/nu-system.git",
  "author": "YFE-TEAM",
  "license": "MIT",  
  "bugs": {
    "url": "https://github.com/yued-fe/nu-system/issues"
  },
  "homepage": "https://yued-fe.github.io/nu-system/example/packages/[component]",
  "keywords": [
      "!ui",
      "ui",
      "no-ui",
      "css",
      "ui-system",
      "[component]"    
  ],
}
```

以上是 package.json 的文档模版，实际开发只需要 `[component]` 替换为相应组件名即可。

```
$ npm publish --access=public
```

在 `package.json` 目录下输入以上命令即可发布到 npm。
