<template>
  <TabBar>
      <TarBarItem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/icon01.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/icon01_active.png" alt="">
        <div slot="item-text">首页</div>
      </TarBarItem>
      <TarBarItem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/icon02.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/icon02_active.png" alt="">
        <div slot="item-text">分类</div>
      </TarBarItem>
      <TarBarItem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/icon03.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/icon03_active.png" alt="">
        <div slot="item-text">购物车</div>
      </TarBarItem>
      <TarBarItem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/icon04.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/icon04_active.png" alt="">
        <div slot="item-text">我的</div>
      </TarBarItem>
    </TabBar>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar";
import TarBarItem from "components/common/tabbar/TarBarItem";

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TarBarItem
  }
}
</script>

<style>

</style>