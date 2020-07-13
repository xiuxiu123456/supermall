<template>
  <div class="num-container">
    <div class="title">15999578552</div>
      <div class="hb-move">
        <div class="move-title">湖北移动</div>
        <div class="move-box">
          <div class="move-top">
            <ul>
              <li v-for="(item,index) in topList" :key="index">
                <!-- <span>~</span> -->
                <span class="top-text">{{item.name}}</span>
              </li>
            </ul>
          </div>
          <div class="money-box">
            <ul>
              <li v-for="(item,index) in numList" :key="index" :class="{active: item.flag=='1'}">
                <div class="box-num">
                  <div class="money-num">{{item.money}}<span v-if="item.flag == '0'">元</span></div>
                  <div class="money-je"><span class="jg-text" v-if="item.flag == '0'">券后价：</span>{{item.price}}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="bottom-content">
            <div class="bottom-left">单笔充值30元，送流量</div>
            <div class="bottom-right">更多面额</div>
          </div>
        </div>
      </div>
      <div class="center-container">
        <div class="left-text">
          <div class="top-content">待领充值金</div>
          <div class="bottom-money">￥0.3</div>
        </div>
        <div class="center-text">1充值金可兑1元话费券</div>
        <div class="right-text">去领取</div>
      </div>
      <div class="bottom-container">
        <div class="top-item">
          <div class="left-item">发现更多</div>
          <div class="right-item">查看全部</div>
        </div>
        <div class="center-content">
          <ul>
            <li v-for="(item,index) in centerList" :key="index">
              <div class="items">{{item.img}}</div>
              <div class="items-text">{{item.name}}</div>
              </li>
          </ul>
        </div>
        <div class="more-content">
          <ul>
            <li v-for="(item,index) in bottomList" :key="index">
              <div class="items text-value">{{item.font}}</div>
              <div class="items-text">{{item.name}}</div>
              </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "numProject",
  data(){
    return {
      topList:[
        {
        name:'余额查询',
        },
        {
          name:'流量充值',
        },
        {
          name:'固话宽带',
        }
      ],
      numList:[
        {
          money:10,
          price:'9.5',
          flag:'0'
        },
        {
          money:20,
          price:'9.5',
          flag:'0'
        },
        {
          money:30,
          price:'9.5',
          flag:'0'
        },
        {
          money:50,
          price:'9.5',
          flag:'0'
        },
        {
          money:100,
          price:'9.5',
          flag:'0'
        },
        {
          money:'5GB流量',
          price:'首月1元体验',
          flag:'1'
        },
      ],
      centerList:[
        {
          img:"I",
          name: "优惠加油"
        },
        {
          img:"I",
          name: "App Store 充值"
        },
        {
          img:"I",
          name: "视频.直播"
        },
        {
          img:"I",
          name: "游戏&QQ"
        },
      ],
      bottomList:[
        {
          font:"宅",
          name: "5G专区"
        },
        {
          font:"家",
          name: "天猫营业厅"
        },
        {
          font:"一",
          name: "话费当钱花"
        },
        {
          font:"夏",
          name: "狂暑季"
        },
      ]
    }
  }
}
</script>

<style scoped>
  .bottom-content{
    margin: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

  }
  .bottom-left{
    color: #d66e25;
  }
  .box-num{
        padding: 10px;
    border: 1px solid #dedede;
    text-align: center;
    font-size: 12px;
    margin: 5px;
    border-radius: 8px;
  }
  .money-box{
    margin-top: 10px;
  }
  .money-num{
    margin-bottom: 8px;;
  }
  .jg-text{
    color: #d66e25;
  }
  .num-container{
    padding: 20px;
    background: #ad67ad;
    height: 100%;
    font-family: "微软雅黑";
  }
  .title{
    color:#fff;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .move-title{
    font-size: 16px;
    color: #fff;
    margin-bottom: 10px;
  }
  .hb-move{
    margin-bottom: 10px;
    
  }
  .move-box{
    background: #fff;
    border-radius: 10px;
    padding: 10px;
  }

  .move-top ul{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .top-text{
    position: relative;
    margin-left: 10px;
  }
  .top-text::before{
    content:'';
    display: inline-block;
    width: 5px;
    height: 5px;
    background:red;
    position: absolute;
    left: -10px;
    top: 50%;
    margin-top: -3px;
    border-radius: 50%;
  }
  .money-box ul{
    display: flex;
    flex-wrap: wrap;
  }
  .money-box ul li{
    width: 33.333%;

  }
  .money-box li.active .box-num{
    background: #f5f4ef;
    color: #d66e25;
  }
  .center-container{
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .left-text .top-content{
    margin: 10px 0;
  }
  .bottom-money{
    color: #d66e25;
    font-size: 20px;
    font-weight: bold;
  }
  .center-text{
    margin: 20px;
    color: #d66e25;
    background: #f5dbd8;
    border-radius: 10px;
  }
  .right-text{
    border-radius: 20px;
    background: #fb8103;
    color: #fff;
    text-align: center;
    padding: 8px;
  }
  .bottom-container{
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .top-item{
        display: flex;
    justify-content: space-between;
  }
  .left-item{
    font-size: 16px;
    font-weight: bold;
  }
 .bottom-container ul{
   display: flex;
   justify-content: space-around;
 }
 .bottom-container ul>li{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
 }
 .items{
   width: 30px;
    height: 30px;
    border-radius: 50px;
    border: 1px solid;
    text-align: center;
    line-height: 30px;
 }
 .center-container{
   margin: 10px 0;
 }
 .items-text{
   margin-top: 10px;
   width: 65px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 100%;
   text-align: center;
 }
  .text-value{
    background: pink;
  }
  .center-content{
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .more-content{
    margin-bottom: 10px;
    margin-top: 20px;
  }
</style>