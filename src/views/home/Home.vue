<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">Shopping</div>
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
      <div class="direct-img"><img :src="directImg.imgSrc" alt=""></div>
      <div class="products-item">
        <span>流行</span>
        <span>新款</span>
        <span>精选</span>
      </div>
      <div>
        <ul>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li><li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
          <li>fff</li>
        </ul> 
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import NavBar from '../../components/common/navbar/NavBar.vue'
// import {getHomeMultidata} from '../../network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      // result: null,
      req:{
        username: 'sz777',
        password: '1234',
      },
      list:[
        {
          title:'新闻1',
          content: '新闻头条1',
          bgColor: 'red',
          detailUrl: 'https://www.baidu.com',
          imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=848977934,2090865154&fm=26&gp=0.jpg'
        },
        {
          title:'新闻2',
          content: '新闻头条2',
          bgColor: 'orange',
          detailUrl: 'https://www.w3school.com.cn/',
          imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=848977934,2090865154&fm=26&gp=0.jpg'
        },
        {
          title:'新闻3',
          content: '新闻头条3',
          bgColor: 'green',
          detailUrl: 'https://www.iconfont.cn/search/index?q=%E9%A6%96%E9%A1%B5',
          imgSrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=848977934,2090865154&fm=26&gp=0.jpg'
        }
      ],
      directImg:{
        imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=848977934,2090865154&fm=26&gp=0'
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
    }
  },
  created() {
    //1.请求多个数据
    this.$axios.post(
      '/login',
      {
        username: 'sz777',
        password: '1234'
      }
    ).then((res) => {
      console.log(res);
    })

        
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
  }
  .content{
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
.products-item{
  display: flex;
  text-align: center;
  line-height: 20px;
  margin: 10px 0 10px 0;
}
.products-item span{
  flex: 1;
}
</style>