<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <!-- <div v-bind:style="{ color: color, fontSize: fontObj.size + 'px'}" @click="changeParent">{{fontObj.name}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<style>
  .nav-bar{
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>