---
title: Intro
---

## What?

`vue-[component]` is primarily responsible for the Login Only section. Try not to be showy in this, just do the logic part.

If you are using a CSS solution, create an additional `CSS -[component]` component for the corresponding presentation style and the corresponding skin.

If you're using a css-in-js solution, you need to define your UI interface and skin extensions within the component.

## Builder

build with vue-cli-service

```bash
npm install -g @vue/cli-service-global
# or
yarn global add @vue/cli-service-global
```

package.json

```js
"scripts": {
    "build":"vue-cli-service build --target lib --name index  --dest lib  ./index.js"
},
```

``` bash
npm run-script build
```

## Tree

```bash
[component]
├── README.md               
├── index.js                
├── lib                     
│   └── index.common.js     
├── package.json     
└── src                     
    └── index.vue
```

## Contribution

Fork [vue-button](https://github.com/nu-system/vue-button) as template.
