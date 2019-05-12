<template>
    <div id="app">
        <h3>{{msg}}</h3>
    </div>
</template>

<script>
export default {
    name:"Login",
    data() {
        return {
            msg:"全局组件login"
        }
    },
}
</script>

<style scoped>

    #app{
        color: #f60;
        text-shadow: 4px 5px 2px #000;
    }
</style>
