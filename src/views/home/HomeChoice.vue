<template>
  <div class="choices">
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <div class="goods-choice">
          <div class="imgBox"><img :src="require(`../../assets/img/homeChoice/${index}.jpg`)" alt=""></div>
          <div class="goods-descript">{{item.word}}</div>
          <div class="goods-price">优惠后价格是：{{item.dollor}}</div>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "HomeChoice",
  data() {
    return {
      goodsList: [
        {
          word: "第一件商品的描述",
          dollor: "44"
        },
        {
          word: "均进行互然后附件",
          dollor: "22.22"
        },
        {
          word: "反反复复付付",
          dollor: "34.99"
        },
        {
          word: "这是最后一件啦",
          dollor: "32.67"
        }
      ]
    }
  }
}
</script>

<style scope>
.choices{
  margin-bottom: 10px;
}
.choices ul{
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
}
.choices li{
  width: 50%;
}
.imgBox{
  height: 160px;
  margin-bottom: 5px;
}
.goods-choice img{
  height: 100%;
  width: 100%;
}
.goods-choice{
  margin: 5px;
}
.goods-descript{
  text-align: center;
  margin-bottom: 5px;
}
.goods-price{
  color: var(--color-high-text);
}
</style>