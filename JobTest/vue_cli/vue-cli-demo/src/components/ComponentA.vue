<template>
    <div>
        <div class="container">
            <div class="con">
                <p>this is conA</p>
                <ComponentB />
            </div>
        </div>
    </div>
</template>
<script>
import ComponentB from '@/components/ComponentB'

export default {
    name:"ComponentA",
    components:{
        ComponentB
    },
    data() {
        return {
            
        }
    },
    methods: {
        
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