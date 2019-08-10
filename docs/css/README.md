# 介绍

## 创建

以下以 `button` 组件为例，解释目录结构和规则。

```bash
[component]
├── README.md           // 介绍你的组件  
├── css                 // build 目录
│   ├── core.css       // 提供 UI Core 代码
│   └── skins          // 提供 Skin library 
│       └── **.css
└── package.json        // 组件配置
```

实际创建将 `button` 修改为你的组件名即可。

## 发布

```json
{
  "name": "@_nu/css-[component]",
  "version": "0.0.1",
  "description": "No UI 组件库系统 nu-system, 弹窗组件",
  "main": "css/core.css",
  "author": "yfe-team",
  "license": "MIT",
  "repository": "git@github.com:nu-system/css-[component].git",
  "bugs": "https://github.com/nu-system/css-[component]/issues",
  "homepage": "https://nu-system.github.io/css/[component]/",
  "keywords": [
      "!ui",
      "ui",
      "no-ui",
      "css",
      "ui-system",
      "nu-system",
      "[component]"    
  ],
  "files": [
    "lib",
    "CHANGELOG.md",
    "README.md",
    "LICENSE",
    "package.json"
  ],
  "scripts": {
    "log": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
    "commitInit": "commitizen init cz-conventional-changelog --yarn --dev --exact"
  },
  "devDependencies": {
    "commitizen": "^4.0.3",
    "conventional-changelog-cli": "^2.0.23",
    "cz-conventional-changelog": "3.0.2"
  }
}
```

以上是 package.json 的文档模版，实际开发只需要 `[component]` 替换为相应组件名即可。

```
$ npm publish --access=public
```

在 `package.json` 目录下输入以上命令即可发布到 npm。
