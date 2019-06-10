<template>
  <div id="app">
    <img src="./assets/logo.png">


    <!-- 状态管理器 -->
    <button @click="increatement">增加</button>
    <button @click="decreatement">减少</button>
    <p>当前count值为：{{count}}</p>

    <router-view/>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['increatement','decreatement'])
  },
  computed: {
    ...mapGetters(['count'])

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
