---
title: Intro
---

## What?

`css-[component]` Mainly responsible for the UI and Skin Library in nu-system。

## How to start

```bash
$ yarn global add @_nu/cli
$ nu-cli # and select css
```

It will create a master component for you.

After finish your can go [nu-system](https://github.com/organizations/nu-system/repositories/new) github and create new repository. 

And push your component.

## Style Guild

- Prefixed with `nu_`, like `.nu_btn`；
- Status recommended to use native or group selectors with prefix `_` like `.nu_btn:disabled, .nu_btn._loading`；

### Bad ❌
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

### Good ✅
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
│   ├── index.css       
│   └── skins          
│       └── default.css
└── package.json       
```

## Contribution

Fork [css-button](https://github.com/nu-system/css-button) Fork me as master。
