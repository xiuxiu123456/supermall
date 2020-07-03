<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
 #app{
   overflow: hidden;
   position: relative;
    width: 100%;
    height: 100%;
}
@import './assets/css/base.css'

</style>
