<template>
    <div>
        <button type="button" @click="dialogOpen = true">打开弹窗</button>
        <Dialog :open.sync="dialogOpen" :position="dialogPosition">
            <h3 class="tac">这是弹窗</h3>
            <div class="dialog-body p24">
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>

                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
                asdf <br>
            </div>
            <div class="tac p24">
                <select @change="handlePosition">
                    <option value="middle">居中显示</option>
                    <option value="top">居上显示</option>
                    <option value="left">居左显示</option>
                    <option value="right">居右显示</option>
                    <option value="bottom">居下显示</option>
                </select>
            </div>
        </Dialog>

    </div>
</template>

<script>
    import Dialog from "./Dialog"

    export default {
        components: {
            Dialog
        },
        data(){
            return {
                dialogOpen:false,
                dialogPosition: 'middle'
            }
        },
        methods: {
            handlePosition(e) {
                this.dialogPosition = e.target.value;
            }
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
</style>
