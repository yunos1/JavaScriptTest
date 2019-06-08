<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
            <button @click="sendMsg">兄弟通信</button>
        </ul>
    </div>
</template>
<script>
import Bus from './Bus.js'

export default {
    name:"ComponentB",
    data() {
        return {
            list:[1,2,3,4,5]
        }
    },
    methods: {
        sendMsg(){
            Bus.$emit('on','来自组件B的信息')
        }        
    },
}
</script>
<style lang="less" scoped>
    ul{
        border: 1px solid gray;
        li{
            list-style: none;
            color: black;
            font-size: 18px;
        }
    }
</style>