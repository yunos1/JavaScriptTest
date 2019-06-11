<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- 状态管理器 -->
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementAsync">异步增加2</button>
    <p>当前count值为：{{count}}</p>
    <p>当前count值为：{{isEven}}</p>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(['increment','decrement']),
    incrementAsync(){
      this.$store.dispatch("incrementAsync")
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
