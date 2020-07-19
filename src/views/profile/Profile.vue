<template>
  <div class="profile">
    <div class="user">
      <div class="user-text">
        <div class="text-name">
          <div class="touxiang"><img :src="require(`../../assets/img/profile/touxiang.jpg`)" alt=""></div>
          <div class="name">
            <div class="userName">微笑22211331</div>
            <div class="sore">
              <ul>
                <li v-for="(item,index) in soreList" :key="index">
                  <div class="clon">
                    {{item.sore}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-set">
          <img :src="require(`../../assets/img/profile/0.png`)" alt="">
          <img :src="require(`../../assets/img/profile/1.png`)" alt="">
          <img :src="require(`../../assets/img/profile/2.png`)" alt="">
        </div>
      </div>
      <div class="user-message">
        <ul>
          <div class="collect">
            <li v-for="(item,index) in collectList" :key="index">
              <div class="coll-number">{{item.number}}</div>
              <div class="coll-text">{{item.text}}</div>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="my-order">
      <div class="order-text">
        <div class="order">我的订单</div>
        <div class="look-all">查看全部<span> > </span></div>
      </div>
      <div class="order-messages">
        <ul>
          <div class="messages-text">
          <li v-for="(item,index) in orderList" :key="index">
            <div class="img-icon"><img :src="require(`../../assets/img/profile/${item.imgName}.png`)" alt=""></div>
            <div class="img-text">{{item.name}}</div>
          </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="scroll">
      <div class="in-buy">
        <div class="buy-text">您已获得<span>1元</span>商品内购资格</div>
        <div class="wait">百款内购好货等您来</div>
      </div>
      <div class="now-look">立即查看<span>></span></div>
    </div>
    <div class="my-tools">
      <div class="order-text">
        <div class="order">我的工具</div>
        <div class="look-all">查看全部<span> > </span></div>
      </div>
      <div class="all-tools">
        <table>
          <tr>
            <td v-for="(item,index) in toolsList" :key="index">
              <div class="tools-des">
                <div class="text-des">
                  <div class="tools-font">{{item.font}}</div>
                  <div class="font-tell">{{item.fontTell}}</div>
                </div>
                <img :src="require(`../../assets/img/profile/${index + 3}.png`)" alt="">
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      soreList: [
        {sore:"信用购>"},
        {sore:"淘气值1062"},
        {sore:"信用积分>"}
      ],
      collectList: [
        {
          number:230,
          text: "收藏夹"
        },
        {
          number:130,
          text: "关注店铺"
        },
        {
          number:778,
          text: "足迹"
        },
        {
          number:6,
          text: "红包卡券"
        },
      ],
      orderList: [
        {
          imgName: "dingdan-daifukuan",
          name: "待付款"
        },
        {
          imgName: "daifahuo",
          name: "待发货"
        },
        {
          imgName: "daishouhuo",
          name: "待收货"
        },
        {
          imgName: "daipingjia",
          name: "待评价"
        },
        {
          imgName: "tuikuan",
          name: "退款/售后"
        }
      ],
      toolsList: [
        {
          font: "U先试用",
          fontTell: "大牌试用1元起"
        },
        {
          font: "话费充值",
          fontTell: "充值更方便"
        },
        {
          font: "我的服务",
          fontTell: "家庭服务10元起"
        },
        {
          font: "领券中心",
          fontTell: "领大额优惠券"
        },
        {
          font: "专享内购",
          fontTell: "内购价格划算"
        },
        {
          font: "天天夺宝",
          fontTell: "每天21:30开奖"
        }
      ]
    }
}
}
</script>

<style scoped>
.profile{
  height:100%;
  position: fixed;
  width: 100%;
  top: 0px;
  bottom: 49px;
  overflow: auto;
}
.img-icon img{
  height: 30px;
  width: 30px;
}
.order{
  font-size: 20px;
    font-weight: bold;
}
.order-messages{
  background: #fff;
    margin: 10px 0;
    padding: 15px 10px;
    border-radius: 10px;

}
.messages-text{
      display: flex;
    justify-content: space-between;
}
.img-icon{
  margin-bottom: 7px;
}
.img-icon img{
      height: 30px;
    width: 30px;
    margin-left: 9px;
}
.text-name{
  display: flex;
}
.profile{
  background: #f7f4f4;
}
.user{
  background: #ff7b54;
}
.user-text{
  display: flex;
  padding: 13px 0px 13px 15px;
}
.name{
  color: #fff;
  margin: 10px;
}
.userName{
  font-size: 20px;
  font-weight: bold;
}
.sore ul{
  display: flex;
  margin-top: 10px;
  font-size: 12px;
}
.sore li{
  background: red;
  border-radius: 10px;
  height: 15px;
  line-height: 15px;
  text-align: center;
}
.sore li:nth-child(1){
  width: 55px;
}
.sore li:nth-child(2){
  width: 75px;
  margin: 0 5px;
}
.sore li:nth-child(3){
  width: 65px;
}
.touxiang img{
  height: 60px;
  border-radius: 50%;
}
.text-set img{
  height: 30px;
  margin-left: 5px;
}
.my-order{
  margin: 20px 10px;
}
.order-text{
  display: flex;
    justify-content: space-between;
}
.text-set{
  position: absolute;
  right: 10px;
}
.user-message{
  color: #fff;
}
.collect{
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
}
.coll-number{
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}
.scroll{
  background: #fff;
  margin: 10px;
  padding: 15px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.buy-text{
      font-size: 18px;
    font-weight: bold;
}
.buy-text span{
      color: red;
    font-size: 19px;
}
.wait{
      font-size: 13px;
    margin-top: 5px;
}
.now-look{
      background: red;
    border-radius: 30px;
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: CENTER;
    color: #fff;
}
.my-tools{
  margin: 20px 10px;
}
.all-tools{
  background: #fff;
    margin-top: 10px;
    border-radius: 5px;

}
tr{
display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
td{
  width: 50%;
  height: 58px;
}
.tools-des{
  display: flex;
  justify-content: space-around;
  margin-left: 15px;
}
.tools-des img{
  width: 60px;
}
.font-tell{
  font-size: 12px;
}
.text-des{
  margin: 10px 5px 10px 0px;
}
.tools-font{
  margin-bottom: 5px;
}
</style>

