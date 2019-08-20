---
title: Intro
---

## What?

`js-[component]` 主要负责 Login Only 部分 。这里面**尽量**不要出现展示性的样式，只做逻辑的部分。


## Script Guild

```javascript
(function (global, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(factory);
    } else {
        // 修改 Component 为你组件的名称
        global.NuComponent = factory();
    }
}(this, function () {

    // 全局参数
    const _default = {

    };
    
    // 你的组件
    function Obj(opt) {
        for (const name of _default) {
            this[name] = opt[name] || _default[name];
        }
        this.init();
    }
    
    // 初始化
    Obj.prototype.init = function () {
        console.log('hello world');
    };

    return Obj;
}));
```

这是一个 JS 代码模版，采用的是 JS 原型链继承的方式编写组件。

## Tree

```bash
[component]
├── README.md          // describe your component 
├── lib                // dist 目录
│   └── index.js       
└── package.json
```

## Contribution

Fork [js-dialog](https://github.com/nu-system/js-dialog) 这个作为组件模版，使用里面配置，删除原始代码，然后创建你自己的组件即可。
