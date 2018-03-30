<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import animate from 'animate.css'
export default {
  name: 'app'
}
</script>

<style>
@import 'components/css/common.css';
html,body{height:100%}
#app {
  height: 100%;
  min-width: 1200px;
  /*overflow-y:scroll;*/
}
</style>
