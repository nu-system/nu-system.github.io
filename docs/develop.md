---
title: 开发
---

# 开发

## UI

虽然 NU-system 分为 UI Core + Logic only + Skin library 三部分。

为了开发和使用便利。目前 UI Core 和 Skin library 部分以及文档都放在了 [nu-system](https://github.com/yued-fe/nu-system) 仓库中。

```
.
├── README.md
├── css
│   ├── core.css
│   └── skins
│       └── **.css
└── package.json
```

基于以上 `nu-system/packages` 目录下创建组件。

- `css/core.css` 用于提供 UI Core 代码。
- `skins/` 用于提供 Skin library 部分。


## Logic

NU-system 本身并没有对语言做限制，所以可以使用任意 JS 语言创建逻辑。只是目前能力有限，支持的语言框架只有 [nu-react](https://github.com/yued-fe/nu-react) 和 [ni-vue](https://github.com/yued-fe/nu-vue) 两个。


```
.
├── README.md
├── package.json
└── lib
    └── index.js
```

基于以上目录结构在 `nu-[component]-[frame]/packages` 目录下创建组件。

