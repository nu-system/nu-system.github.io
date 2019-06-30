<template>
    <div class="demo">
        <NuAjaxForm
                action="https://www.mocky.io/v2/5cee2090300000013a6e98c9?mocky-delay=1000ms"
                @onSuccess="handelSuccess"
        >
            <p>click the button below will send a request and get a response after 1000ms</p>
            <button type="submit">submit</button>
            <span slot="success">request success</span>
            <span slot="loading">loading...</span>
            <span slot="error">error</span>
        </NuAjaxForm>
    </div>
</template>

<script>
    import NuAjaxForm from "@_nu/vue-axios-form";

    export default {
        components: {NuAjaxForm},
        methods: {
            handelSuccess(response) {
                console.log('handelSuccess', response);
            }
        }
    }
</script>

<style>
    .demo {
        border: 1px solid #eee;
        border-radius: 3px;
        padding: 1em;
    }

    .tac {
        text-align: center;
    }
</style>
