<template>
  <div id="home">
    <NavBar  class="home-nav" >
      <div slot="center" >Shopping</div>
    </NavBar>
    
    <div class="container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <!-- {{item.title}} -->
          <div :style="{background:`url(${item.imgSrc})`}" class="swipper-box" @click="imgClick(item.detailUrl)">
            <div class="title" :class="{active: index==1}">{{item.title}}</div>
            <div class="content">{{item.content}}</div>
            <!-- <img :src="item.imgSrc" alt="WW"> -->
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="direct-img" @click="toNumproject"><img :src="directImg.imgSrc" alt=""></div>
      <TabControl class="tabControl" :titles="tabList">
      </TabControl>
       
      <div class="tabBottom">
        <!-- <ul>
            <li><router-link to="/home/homePop">Work1</router-link></li>
            <li><router-link to="/home/homeNew">Work2</router-link></li>
            <li><router-link to="/home/homeChoice">Work3</router-link></li>
        </ul> -->
        <router-view></router-view> 
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'

// import {getHomeMultidata} from '../../network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    TabControl
  },
  data() {
    return {
      // result: null,
      req:{
        username: 'sz777',
        password: '1234',
      },
      tabList:[
        {
          tabName: '流行',
          tabPath: '/home/homePop'
        },
        {
          tabName: '新款',
          tabPath: '/home/homeNew'
        },
        {
          tabName: '精选',
          tabPath: '/home/homeChoice'
        }
      ],
      list:[
        {
          title:'图片1',
          content: '这是第一张图片1',
          bgColor: 'red',
          detailUrl: 'https://www.baidu.com',
          imgSrc:'http://01.minipic.eastday.com/20170330/20170330044723_a0c69f758cc90e87e8c8e620eb55308e_2.jpeg'
        },
        {
          title:'图片2',
          content: '这是第二张图片2',
          bgColor: 'orange',
          detailUrl: 'https://www.w3school.com.cn/',
          imgSrc:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1392974587,4137238&fm=26&gp=0.jpg'
        },
        {
          title:'图片3',
          content: '这是第三张图片3',
          bgColor: 'green',
          detailUrl: 'https://www.iconfont.cn/search/index?q=%E9%A6%96%E9%A1%B5',
          imgSrc:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1926836966,2010107208&fm=26&gp=0.jpg'
        }
      ],
      directImg:{
        imgSrc: 'http://img3.imgtn.bdimg.com/it/u=106602438,2685454593&fm=26&gp=0.jpg'
      },
      swiperOptions: {
        //自动播放
        autoplay:{
          delay:2000,
          disableOnInteraction:false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        //循环
        loop:true
      }
    }
  },
  methods: {  
    imgClick(url) {
      //跳转到外部地址
      // let url = 'https://image.baidu.com/'
      location.href=url
      // this.$router.replace('/category')
    },
    toNumproject(){
      this.$router.push('/numProject')
    }
  },
  
  created() {
    //1.请求多个数据
    // this.$axios.post(
    //   '/login',
    //   {
    //     username: 'sz777',
    //     password: '1234'
    //   }
    // ).then((res) => {
    //   console.log(res);
    // })

        
    // getHomeMultidata(this.req)
    // .then(res => {
    //   console.log(res);
    //   this.result = res;
    // })
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, true)
    }
}
</script>

<style>
#home{
  position: absolute;
  top: 0;
  bottom: 44px;
  left: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}
  .home-nav{
    background-color: var(--color-text);
    color: #ffffff;
  }
  .swipper-box{
    height: 160px;
    padding: 20px;
    color: #ffffff;
    /* box-shadow: 0px 30px 0px #888888; */
  }
  .title{
    font-size: 20px;
    font-weight: bold;
    color: aqua;
  }
  .content{
    color: aqua;
    margin-top: 40px;
  }
  .swipper-box .active{
    color: black;
  }
  .direct-img{
     margin-top: 10px
  }
.container{
  overflow: auto;
    flex: 1;
}
.direct-img img{
  width: 100%;
}

</style>