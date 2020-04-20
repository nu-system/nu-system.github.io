# Dialog

| npm package| npm downloads |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![github][git-badge]][git-url] |


[npm-badge]: https://img.shields.io/npm/v/@_nu/vue-dialog.svg
[npm-url]: https://www.npmjs.org/package/@_nu/vue-dialog
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/vue-dialog
[git-url]: https://github.com/nu-system/vue-dialog
[git-badge]: https://img.shields.io/github/stars/nu-system/vue-dialog.svg?style=social

Dialog component of vue.

<iframe src="https://codesandbox.io/embed/nudialogvue-phc9q?autoresize=1&fontsize=14&hidenavigation=1&view=preview" title="nu-dialog-vue" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<ClientOnly>
<DialogDemo/>
</ClientOnly>

## Use

```bash
$ yarn add @_nu/vue-dialog @_nu/css-dialog
```

* **@_nu/vue-dialog**： logic component;
* **@_nu/css-dialog**:  style component;

### Custom

```vue
<!-- @components/Dialog/index.vue -->
<script>
  import NuDialog from "@_nu/vue-dialog"
  export default NuDialog;
</script>

<!--样式引用-->
<style src="@_nu/css-dialog"></style>
<style src="@_nu/css-dialog/css/position/middle.css"></style>
<!-- 
<style src="@_nu/css-dialog/css/position/top.css"></style>
<style src="@_nu/css-dialog/css/position/left.css"></style>
<style src="@_nu/css-dialog/css/position/right.css"></style>
<style src="@_nu/css-dialog/css/position/bottom.css"></style> 
-->
```

It is not recommended to use nu-dialog directly in the project page by `import "@_nu/vue-dialog"`. 

Instead, `@_nu/vue-dialog` is used as the construction tool of a dialog component. In the folder of its `components/`, 

it is "repackaged" in the above way, and then 'export' belongs to the dialog component of its own project.

The Dialog logic for its own global Dialog can be written in this logic.

### Use

```vue
<template>
  <div id="app">    
    <button type="button" @click="dialogOpen = true">打开弹窗</button>            
    <Dialog :open.sync="dialogOpen" :position="dialogPosition">
      <select @change="handlePosition">
        <option value="middle">居中显示</option>
        <option value="top">居上显示</option>
        <option value="left">居左显示</option>
        <option value="right">居右显示</option>
        <option value="bottom">居下显示</option>
      </select>
    </Dialog>
  </div>
</template>

<script>
  import Dialog from "@components/Dialog";
  
  export default {
    name: 'app',
    data() {
      return {
        dialogOpen: false,
        dialogPosition: 'middle'
      }
    },
    components: {
      Dialog
    },
    methods: {
        handlePosition(e) {
         this.dialogPosition = e.target.value;
        }
    }
}
</script>
```

the dom will portal to the `body`.

## Api

| props   |      type      | default  | function |
|:----------|:-------------|:------:|------:|
| :open.sync |  boolean | - | show |
| :position |  strong | 'middle' | position of dialog |
| :beforeClose |  Func | - | before on close |
| :isPortal | boolean | 'true' | is need portal |
| :speed | Number | 200 | time speed |

**position [option]**: `middle`,`top`,`right`,`left`,`bottom`;

**beforeClose**: is `false` the dialog will not close;

## Dom

```vue
<div v-if="render" class="nu_dialog_wrap" :class="computedClass">
  <slot name="mask">
    <label class="nu_dialog_mask" @click="handleClickMask"/>
  </slot>
  <slot name="dialog">
    <div class="nu_dialog">
      <slot name="close">
        <label class="nu_dialog_close" @click="handleClickClose">
          <slot name="close-icon">&times;</slot>
        </label>
      </slot>
      <slot></slot>
    </div>
  </slot>
</div>
```

`nu-dialog-vue` all the sub component can rewrite by `slot`。

