<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import  '../static/css/base.css'
import  '../static/font/iconfont.css'
export default {
  name: 'app',
  components:{
  }
}
</script>

<style>
#app {
  height: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0 auto;
  /*margin-top: .14rem;*/
  /*width: 96%;*/
  /*background-color:#FFF;*/
  position: relative;
  font-size: 16px;
  background-color:#ECECEC;
}
</style>
