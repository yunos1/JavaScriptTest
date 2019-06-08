<template>
    <div id="comc">
        {{msg}}
        <button @click="sendMsg">子到父通信</button>
        <p>来自父组件的信息，{{text}}</p>
    </div>
</template>
<script>
import Bus from './Bus.js'
export default {
    name:'ComponentC',
    data() {
        return {
            msg:'',
            name:"CompC"
        }
    },
    props:['text'],
    methods: {
        showMsg(){
            const self = this;
            Bus.$on('on',msg=>{
                self.msg = msg;
            })
        },
        sendMsg(){
            const self = this;
            self.$emit('comC',self.name)
        }
    },
    mounted() {
        const self = this;
        self.showMsg();
    },
}
</script>
<style lang="less">
    #comc{
        border: 1px solid red;
    }
</style>
