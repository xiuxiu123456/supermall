<template>
  <div class="details">
    <div class="return" @click="returnCategory">返回</div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in detailList" :key="index">
        <div class="detail-img">
          <img :src="require(`../../assets/img/detailimg/${item.imgSrc}.jpg`)" alt="">
        </div>
      </swiper-slide>
      
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="price-des">
      <div class="price">狂暑价</div>
      <div class="money">
        <div class="gen-price">￥68</div>
        <div class="count-price">狂暑价券后￥56.2</div>
      </div>
      <div class="coupon">
        <div class="cou-text">跨店每满300减30</div>
        <div class="cou-des">店铺券满30减5</div>
        <div class="colloge">领券></div>
      </div>
    </div>
    <div class="goods-descripe">
      <div class="goods-pre">
        <div class="detail-des">2020夏季现款短袖T恤休闲后背印花小个子宽松韩版白色女装上衣</div>
        <div class="icon">
          <div class="para"><img :src="require(`../../assets/img/detailimg/参数.png`)" alt=""></div>
          <div class="share"><img :src="require(`../../assets/img/detailimg/分享.png`)" alt=""></div>
        </div>
      </div>
      <div class="sales">
        <div class="paper">下单得私房红包</div>
        <div class="month">月销518</div>
      </div>
      <div class="size-text">
        <ul>
          <li v-for="(item,index) in sizeList" :key="index">
            <div class="saleText">
              <div class="img-box">
                <img :src="require(`../../assets/img/detailimg/${item.imgName}.png`)" alt="">
              </div>
              <div class="good-descript">{{item.name}}</div>
              <div class="goods-price">{{item.go}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="buy-ways">
      <div class="cat">信用APP | 信用购</div>
      <div class="post">0元下单,喜欢再付款</div>
      <div class="open">去开通</div>
    </div>
    <div class="goods-assess">
      <div class="all-assess">
        <div class="assess-left">商品评价(346343)</div>
        <div class="assess-look">查看全部 ></div>
      </div>
      <div class="ok-assess">
        <ul>
          <li v-for="(item,index) in mostList" :key="index">
              <div class="little-ass">{{item.appearance}}</div> 
          </li>
        </ul>
      </div>

      <div class="line"><hr></div>

      <div class="all-assess">
        <div class="assess-left">问大家(89)</div>
        <div class="assess-look">查看全部 ></div>
      </div>
      <div class="quest">
        <ul>
          <li v-for="(item,index) in assessList" :key="index">
            <div class="assessText">
              <div class="ask">{{item.ask}}</div>
              <div class="goods-que">{{item.answer}}</div>
              <div class="goods-answer">{{item.go}}</div>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div class="for-you">为你推荐
      <img :src="require(`../../assets/img/detailimg/1594549025(1).png`)" alt="">
    </div>
    <div class="bottom-message">
      <div class="server">
      <img :src="require(`../../assets/img/detailimg/客服.png`)" alt="">
      </div>
      <div class="store">
      <img :src="require(`../../assets/img/detailimg/店铺.png`)" alt="">
      </div>
      <div class="col">
      <img :src="require(`../../assets/img/detailimg/收藏.png`)" alt="">
      </div>
      <div class="join" @click="joinClick">加入购物车</div>
      <div class="buy">
        <div class="let-buy">领券购买</div>
        <div class="last-buy">券后 ￥ 56.2</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: "Detail",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        detailList: [
          {
            imgSrc: '0'
          },
          {
            imgSrc: '1'
          },
          {
            imgSrc: '2'
          },
          {
            imgSrc: '3'
          },
        ],
        sizeList: [
          {
            imgName: "预售",
            name:"店铺预售，最晚2020.7.30日24点前发货",
            go: ">"
          },
          {
            imgName: "选择尺码",
            name: "选择尺码",
            go: ">"
          }
        ],
        mostList: [
          {
            appearance: "面料很好(34)",

          },
          {
            appearance: "质量很好(732)",
          },
          {
            appearance: "版型很好(732)",
          },
          {
            appearance: "穿着很舒适(14)",
          },
          {
            appearance: "尺码合适(34)",
          },
          {
            appearance: "物流服务一般(8)"
          },
        ],
        assessList: [
          {
            ask: "问",
            answer:"这衣服质量真的那么好吗。。？",
            go: "5个回答"
          },
          {
            ask: "问",
            answer: "衣服褪不褪色 褪色请告知 店家请勿敷衍回答 谢谢",
            go: "7个回答"
          }
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
  methods: {
    returnCategory(){
      this.$router.push("/category")
    },
    joinClick() {
      this.$router.push("/cart")
    }
  }
}
</script>

<style scope>

.detail-img{
  height: 100%;
}
.detail-img img{
  width: 100%;
}
.return{
  position: fixed;
  left: 5px;
  top: 5px;
  z-index: 2;
  color: #fff;
  background: #bfbebe;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
}
.details{
  background: #ececf7;
  position: fixed;
  top: 0px;
  width: 100%;
  bottom: 49px;
  overflow: auto;
}
.price-des{
  background: #4242f3;
  padding: 10px;
}
.price{
  color: #fff;
  margin-bottom: 5px;
}
.gen-price{
  color: #fff;
  font-size: 21px;
}
.money{
  display: flex;
  justify-content: space-between;
}
.count-price{
  width: 163px;
  height: 30px;
  color: #4242f3;
  font-weight: bold;
  line-height: 30px;
  background: #fff;
  border-radius: 15px;
  text-align: center;
}
.coupon{
  display: flex;
  margin-top: 10px;
  text-align: center;
  line-height: 44px;
  background: #fff;
  text-align: center;
  padding-left: 8px;
  border-radius: 5px;
}
.cou-text{
  border: 1px solid #e42929;
  border-radius: 5px;
  margin: 8px 0;
  height: 26px;
  width: 125px;
  text-align: center;
  line-height: 26px;
  font-size: 13px;
  color: red;
}
.cou-des{
  border: 1px solid #e42929;
  border-radius: 5px;
  margin: 8px 2px;
  height: 26px;
  width: 110px;
  text-align: center;
  line-height: 26px;
  font-size: 13px;
  color: red;
}
.colloge{
  margin-left: 90px;
  background: #e8550c;
  margin-top: 10px;
  width: 68px;
  height: 25px;
  line-height: 25px;
  color: #fff;
  border-radius: 15px 0 0 15px;
}
.goods-descripe{
  background: #fff;
  padding: 10px;
  position: relative;
}
.detail-des{
  width: 265px;
  height: 45px;
  line-height: 23px;
  font-weight: bold;
}
.icon{
  position: absolute;
  right: 6px;
  top: 10px;
  display: flex;
}
.icon img{
  height: 45px;
}
.para{
  margin: 0 30px;
}
.sales{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
}
.paper{
  background: #f5d4d6;
  border-radius: 15px;
  color: red;
  width: 100px;
  height: 14px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
}
.saleText{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.good-descript{
  width: 285px;
  height: 26px;
  margin-left: -32px;
}
.buy-ways{
  background: red;
  margin: 10px 0;
  padding: 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.post{
  font-size: 12px;
  line-height: 19px;
  text-align: center;
}
.open{
  border-radius: 10px;
  border: 1px solid #fff;
  width: 60px;
  height: 17px;
  text-align: center;
  font-size: 14px;
}
.goods-assess{
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
}
.all-assess{
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.assess-left{
  font-weight: bold;
}
.assess-look{
  color: var(--color-high-text);
}
.ok-assess ul{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 13px;
}
.ok-assess li{
  width: 105px;
  height: 30px;
  background: #ffdde3;
  border-radius: 15px;
  margin: 5px;
  text-align: center;
  line-height: 30px;
}
.ok-assess li:nth-last-child(1){
  background: #ececec;
  width: 130px;
}
.ok-assess li:nth-child(4){
  width: 120px;
}
line{
  background: #ececf7;
}
.assessText{
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
.goods-que{
  width: 274px;
  margin-left: -15px;
  font-size: 14px;
}
.ask{
  background: #f55407;
  color: #fff;
  width: 17px;
  height: 17px;
  font-size: 14px;
  text-align: center;
  line-height: 19px;
}
.goods-answer{
  font-size: 13px;
}
.for-you{
  background: #fff;
  padding: 10px;
  font-size: 17px;
}
.for-you img{
  width: 100%;
  margin-top: 10px;

}
.bottom-message{
  background: #fff;
  display: flex;
  justify-content: space-around;
}
.join{
  width: 110px;
  background: #fd9902;
  height: 64px;
  line-height: 64px;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.buy{
  width: 110px;
  background: red;
  margin-left: -12px;
}
.let-buy{
  width: 110px;
  line-height: 48px;
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.last-buy{
  width: 110px;
  line-height: 0px;
  text-align: center;
  color: #fff;
  font-size: 13px; 
}
</style>