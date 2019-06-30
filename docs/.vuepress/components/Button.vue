<script>
  import NuButton from "@_nu/vue-button";
  import "@_nu/vanilla-button/css/core.css";
  import "@_nu/vanilla-button/css/skins/bootstrap.css";
  import "@_nu/vanilla-button/css/skins/loading.css";
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
