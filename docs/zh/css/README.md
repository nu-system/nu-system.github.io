---
title: Intro
---

## 是什么

`css-[component]` 主要负责 nu-system 里面的 UI 和 Skin Library 两个部分。

## 开始

```bash
$ yarn global add @_nu/cli
$ nu-cli # 选择 css
```

会在你的当前目录创建一个母版仓库，你直接写就好了。

然后去 [nu-system](https://github.com/organizations/nu-system/repositories/new) github 上创建一个新的仓库。
然后把你写的组件提交上去即可。

## Style Guild

- 主选择器带 `nu_` 前缀，比如 `.nu_btn`；
- 想要拓展组件样式建议使用原生的方式或者群组选择器，并以 `_` 开头，比如 `.nu_btn:disabled, .nu_btn._loading`；

### 不推荐 ❌

```HTML
<style>
.nu_btn{}
.nu_btn_disabled{}
.nu_btn_loading{}
</style>
<button type="button" class="nu_btn nu_btn_disabled nu_btn_loading">
    hello world!
</button>
```

### 正确 ✅

```HTML
<style>
.nu_btn{}
.nu_btn:disabled{}
.nu_btn._loading{}
</style>
<button type="button" class="nu_btn _loading" disabled>
    hello world!
</button>
```

## Component Tree

```bash
[component]
├── README.md
├── css
│   ├── core.css
│   └── skins
│       └── **.css
└── package.json
```

## Contribution

Fork [css-button](https://github.com/nu-system/css-button) 这个作为组件模版，使用里面配置，删除原始代码，然后创建你自己的组件即可。
