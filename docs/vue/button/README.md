# nu-button-vue

<ClientOnly>
<ButtonDemo/>
</ClientOnly>

这是 NU 「 no-ui 」 组件库系统 nu-system，按钮组件 VUE 实现。

## 怎么用?

```bash
$ npm i @y-fe/nu-button-vue @y-fe/nu-button
```

```bash
$ yarn add @y-fe/nu-button-vue @y-fe/nu-button
```

### 二次封装

```vue  
<script>
  import NuButton from "@y-fe/nu-button-vue";
  import "@y-fe/nu-button";
  import "@y-fe/nu-button/css/skins/loading.css";
  import "@y-fe/nu-button/css/skins/bootstrap.css";

  export default {
    props: {
      // 设置默认颜色
      color: {
        default: 'primary'
      },
      // 设置默认变体
      variant: {
        default: 'ghost'
      },
    },
    mixins: [NuButton]
  };
</script>

<style>
  .nu_btn{
    /** 自定义样式 */
  }
</style>
```

设置默认「 颜色 」和「 变体 」的目的是避免每次在使用按钮的时候需要添加对应属性。

因为 `@y-fe/nu-button-vue` 是纯逻辑组件本身不会输出任何样式，在实际项目中使用需要二次封装。
这里采用的是 [nu-button](https://nu-system.github.io/vanilla/button/) 里面的 bootstrap 皮肤。

### 使用

```vue  
<template>
    <div>
      <Button>按钮</Button>
    </div>  
</template>

<script>
    import Button from "@components/Button";
    export default {
        components: {
            Button
        }
    }
</script>
```

## DOM 结构

```VUE
<Button>hello</Button>
<Button href="." title="hello">hello</Button>
```

上面的代码会被渲染成如下的 HTML 结构。

```HTML
<button class="nu_button" type="button" ><span>hello</span></button>
<a class="nu_button" href="." title="hello"><span>hello</span></a>
```

## API

| props   | 类型 | 默认值 | 功能 | DEMO |
|:-----|:-----:|:-----:|:-----:|:-----:|
| baseClass |  string | 'nu_btn' | 默认选择器 | - |
| type |  string | 'button' | 按钮类型 | <ClientOnly><Button type="submit">Submit</Button></ClientOnly> |
| href |  string | - | 跳转链接|<ClientOnly><Button href=".">按钮</Button></ClientOnly> |
| color| 'default' &#124; 'primary' &#124; 'secondary' &#124; <br/> 'success' &#124; 'warning' &#124; 'danger' |  'default' | 按钮颜色 | <ClientOnly><Button>按钮</Button></ClientOnly> |
| primary |  boolean | - | 主按钮 | <ClientOnly><Button primary>按钮</Button></ClientOnly> |
| secondary |  boolean | - | 次级按钮 | <ClientOnly><Button secondary>按钮</Button></ClientOnly> |
| warning |  boolean | - | 警告按钮 | <ClientOnly><Button warning>按钮</Button></ClientOnly> |
| success |  boolean | - | 成功按钮 | <ClientOnly><Button success>按钮</Button></ClientOnly> |
| danger |  boolean | - | 危险按钮 | <ClientOnly><Button danger>按钮</Button></ClientOnly> |
| variant| 'fill' &#124; 'ghost' &#124; 'link' | 'fill' | 按钮变体 | <ClientOnly><Button>按钮</Button></ClientOnly> |
| fill | boolean | - | 实心按钮 | <ClientOnly><Button>按钮</Button></ClientOnly> |
| ghost |  boolean | - | 幽灵按钮 | <ClientOnly><Button ghost>按钮</Button></ClientOnly> |
| link |  boolean | - | 链接按钮 | <ClientOnly><Button link>按钮</Button></ClientOnly> |
| large |  boolean | - | 大按钮 | <ClientOnly><Button large>按钮</Button></ClientOnly> |
| middle |  boolean | - | 中号按钮 | <ClientOnly><Button middle>按钮</Button></ClientOnly> |
| small |  boolean | - | 小按钮 | <ClientOnly><Button small>按钮</Button></ClientOnly> |
| disabled |  boolean | - | 不可用按钮|<ClientOnly><Button disabled>按钮</Button></ClientOnly> |
| loading |  boolean | - | loading按钮|<ClientOnly><Button loading>按钮</Button></ClientOnly> |
| capsule |  boolean | - | 圆角按钮|<ClientOnly><Button capsule>按钮</Button></ClientOnly> |
| block |  boolean | - | 占一行的按钮| 见下面demo |

<ClientOnly>
<Button block> block 按钮</Button>
</ClientOnly>

并且除了上表中的属性，其它属性都会直接传到原生 button 上。

## 如何修改样式？

nu-button-vue 会将上所有的 `boolean` 属性，基于以下的 「 class 映射表 」添加对应的 class 到按钮上。想要自定义样式，只需要围绕对应选择器进行开发即可, 样式定义规则可以查看 [nu-button](https://yued-fe.github.io/nu-system/packages/button/)。

| props |  class |
|:----------|------:|
| baseClass | .nu_btn |
| primary | ._primary |
| secondary | ._secondary |
| warning | ._warning |
| success | ._success |
| danger | ._danger |
| fill | ._fill |
| ghost | ._ghost |
| link | ._link |
| disabled | ._disabled |
| loading | ._loading |
| large | ._large |
| middle | ._middle |
| small | ._small |
| capsule | ._capsule |
| block | ._block |
