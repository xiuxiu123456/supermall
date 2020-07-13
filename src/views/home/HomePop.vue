<template>
  <div class="choices">
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <div class="goods-choice">
          <div class="imgBox"><img :src="require(`../../assets/img/homePop/${item.imgName}.png`)" alt=""></div>
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
          imgName:"3",
          word: "港味复古衬衫",
          dollor: "76.99"
        },
        {
          imgName:"2",
          word: "2020夏天约会小众服饰",
          dollor: "53.22"
        },
        {
          imgName:"1",
          word: "适用Apple",
          dollor: "44"
        },
        {
          imgName:"0",
          word: "网红拖鞋女夏季外穿",
          dollor: "35.09"
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