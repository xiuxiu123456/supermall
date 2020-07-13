<template>

  <div id="category">
    <NavBar class="category-nav">
      <div slot="left" @click="returnHome"><img src="~assets/img/fanhui.png" alt=""></div>
      <div slot="center" class="nav-text">
        <ul>
          <li v-for="(item,index) in navList" :key="index">
            <div class="nav-class">{{item.name}}</div>
          </li>
        </ul>
        
      </div>
    </NavBar>
    <div class="category-content">
      <div class="category-left">
        <ul>
          <div class="left-item">
          <li v-for="(item,index) in leftList" :key="index">
            <div class="options-text">{{item.options}}</div>
          </li>
          </div>
        </ul>
      </div>
      <div class="category-right">
        <div class="like-item">
          <span>猜你喜欢</span>
          <ul>
            <li v-for="(item,index) in likeList" :key="index" @click="detailClick(item,index)">
              <div class="like-text" >
                <div>
                  <img :src="require(`../../assets/img/categorytop/${index}.png`)">
                  <!-- <img :src="item.imgSrc"> -->
                </div>
                <div class="cloth">{{item.describe}}</div>
              </div>
            </li>
          </ul>
          </div>
        <div class="pop-item">
          <span>流行趋势</span>
          <ul>
            <li v-for="(item,index) in popList" :key="index">
              <div class="pop-text">
                <div>
                  <img :src="require(`../../assets/img/categorybottom/${index}.png`)">
                  <!-- <img :src="item.imgSrc"> -->
                </div>
                <div class="skirt">{{item.goods}}</div>
              </div>
            </li>
          </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import NavBar from '../../components/common/navbar/NavBar.vue'


export default {
  name: 'Category',
  components: {
    NavBar
  },
  data() {
    return {
      scroll: null,
      navList: [
        {
          name: "服装"
        },
        {
          name: "护肤"
        },
        {
          name: "电器"
        },
      ],
      leftList: [
        {
          options: "女装"
        },
        {
          options: "男装"
        },
        {
          options: "内衣"
        },
        {
          options: "母婴"
        },
        {
          options: "鞋靴"
        },
        {
          options: "箱包"
        },
        {
          options: "运动"
        },
        {
          options: "睡衣"
        }
      ],
      likeList: [
        {
          describe: "上衣"

        },
        {
          describe: "T恤"
        },
        {
          describe: "时尚套装"
        },
        {
          describe: "牛仔裙"
        },
        {
          describe: "连衣裙"
        },
        {
          describe: "半身裙"
        }
      ],
      popList: [
        {
          goods: "JK制服"
        },
        {
          goods: "方领连衣裙"
        },
        {
          goods: "洛丽塔"
        },
        {
          goods: "西装连衣裙"
        }
      ]
    }
  },
  methods: {
    detailClick(item,index) {
      console.log(99999999999);
      this.$router.push({path:'/detail',query:{detailId:index}})
    },
    returnHome(){
      this.$router.push('/home/homePop')
    }
  },
  mounted() {
    // this.scroll = new BScroll(document.querySelector('.content33'),{

    // })
  },
}
</script>

<style>
#category{
  /* height: 100%;
  background-color: rgb(248, 163, 163); */
  overflow: hidden; 
}
.category-content{
  display: flex;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.category-nav img{
  height: 33px;
  margin-left: -12px;
  margin-top: 4px;
}
.nav-class{
  float: left;
}
.nav-text ul{
  display: flex;
  justify-content: space-between;
}
.left-item{
    background: aliceblue;
    display: flex;
    flex-wrap: wrap;
}
.left-item li{
  margin-left: 11px;
}
.options-text{
  margin: 27px;
}
.category{
  position: relative;
}
.category-left{
    width: 100px;
}
.category-right{
    overflow: auto;
    flex: 1;
}
.like-item{
  margin-top: 10px;
}
.like-item span{
  margin-left: 10px;
  font-weight: bold;
  font-size: 19px;
}
.like-item ul{
  display: flex;
  flex-wrap: wrap;
}
.like-text img{
  width: 126px;
  height: 118px;
}
.cloth{
  text-align: center;
}
.pop-item {
  margin-top: 15px;
}
.pop-item span{
  font-weight: bold;
  font-size: 19px;
  margin-left: 10px;
}
.pop-item ul{
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}
.pop-text img{
  width: 126px;
  height: 118px;
}
.skirt{
  text-align: center;
}
</style>