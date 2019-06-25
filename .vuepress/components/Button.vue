<script>
  import NuButton from "../../vue/button/src/index";
  import "@y-fe/nu-button/css/core.css";
  import "@y-fe/nu-button/css/skins/bootstrap.css";
  import "@y-fe/nu-button/css/skins/loading.css";
  // import NuButton from "@y-fe/nu-button-vue";
  export default {
    props: {
      variant: {
        default: 'fill'
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
