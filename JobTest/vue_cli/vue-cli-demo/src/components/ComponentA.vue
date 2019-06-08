<template>
    <div>
        <div class="container">
            <div class="con">
                <p>This message from componentC , msg is {{msg}}</p>
                <ComponentB />
                <!-- 父子通信 -->
                <ComponentC @comC="showMsg" :text="age"/>
                <!-- 全局组件 -->
                <Login />
            </div>
        </div>
    </div>
</template>
<script>
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export default {
    name:"ComponentA",
    components:{
        ComponentB,
        ComponentC
    },
    data() {
        return {
            msg:'',
            age:'这是父组件的信息'
        }
    },
    methods: {
        showMsg(msg){
            const self = this;
            self.msg = msg;
        }
    },
}
</script>
<style lang="less" scoped>
    .container{
        background: yellow;
        .con{
            p{
                color: red;
                font-size: 20px;
            }
        }
    }
</style>