<template>
  <div id="app">
    <img src="./assets/logo.png">


    <!-- 状态管理器 -->
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementAsync">异步增加</button>
    <button @click="incrementAsync2">异步增加2</button>
    <p>当前count值为：{{count}}</p>
    <p>当前count值为：{{isEven}}</p>

    <router-view/>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return{

    }
  },
  methods: {
    ...mapActions(['increment','decrement','incrementAsync']),
    incrementAsync2(){
       this.$store.dispatch('incrementAsync');
    }
  },
  computed: {
    ...mapGetters(['count','isEven'])
  },  
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
