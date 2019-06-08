<template>
    <div id="login">
        {{msg}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"login全局组件"
        }
    }
}
</script>
<style lang="less">
    #login{
        color: orangered;
        font-size: 25px;
        text-shadow: 5px 5px 6px;
    }
</style>