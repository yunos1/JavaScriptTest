<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"ComponentB",
    data() {
        return {
            list:[1,2,3,4,5]
        }
    },
    methods: {
        
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