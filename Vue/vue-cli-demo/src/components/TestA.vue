<template>
    <div>
        <h2>A组件</h2>
        <p>{{msg}}</p>
        <TestB></TestB>
    </div>
</template>

<script>
import TestB from './TestB'
export default {
    name:"TestA",
    data() {
        return {
            msg:"Hello Vue"
        }
    },
    components:{
        TestB
    }
}
</script>
<style scoped>

</style>

