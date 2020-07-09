<template>
  <!-- <div class="content33" ref="aaaa"></div> -->
  <div id="category">
    <NavBar class="category-nav">
      <div slot="left"><img src="~assets/img/fanhui.png" alt=""></div>
      <div slot="center">
        <div>
          <span>1</span><span>1</span><span>1</span>
        </div>
        
      </div>
    </NavBar>
    <div class="category-container"></div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import NavBar from '../../components/common/navbar/NavBar.vue'


export default {
  name: 'Category',
  components: {
    NavBar
  },
  data() {
    return {
      // scroll: null
    }
  },
  mounted() {
    // this.scroll = new BScroll(document.querySelector('.content33'),{
    // })
  }
}
</script>

<style>
/* .content33{
  height: 150px;
  background-color: red;
  overflow: hidden;
} */
.category-nav img{
  height: 44px;
}
</style>