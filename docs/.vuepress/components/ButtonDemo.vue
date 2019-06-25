<template>
    <div>
        <div class="mb16">
            <Button>按钮</Button>
            <Button warning>按钮</Button>
            <Button danger>按钮</Button>
            <Button success>按钮</Button>
            <Button secondary>按钮</Button>
            <Button loading>按钮</Button>
        </div>
        <div class="mb16">
            <Button ghost>按钮</Button>
            <Button ghost warning>按钮</Button>
            <Button ghost danger>按钮</Button>
            <Button ghost success>按钮</Button>
            <Button ghost secondary>按钮</Button>
            <Button ghost loading>按钮</Button>
        </div>
        <div>
            <Button link>按钮</Button>
            <Button link warning>按钮</Button>
            <Button link danger>按钮</Button>
            <Button link success>按钮</Button>
            <Button link secondary>按钮</Button>
            <Button link loading>按钮</Button>
        </div>
    </div>
</template>

<script>
    import Button from "./Button";

    export default {
        components: {
            Button
        }
    }
</script>

<style>
    .p24{
        padding: 24px;
    }
    .tac {
        text-align: center;
    }
    .dialog-body {
        height: 100px;
        overflow-y: auto;
    }
    .mb16{
        margin-bottom: 16px;
    }
</style>
