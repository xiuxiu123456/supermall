<template>
  <div class="choices">
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <div class="goods-choice">
          <div class="imgBox"><img :src="require(`../../assets/img/homeNew/${index}.png`)" alt=""></div>
          <div class="goods-descript">商品的描述：{{item.word}}</div>
          <div class="goods-price">券后价：{{item.dollor}}</div>
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
          word: "女凉鞋2020夏季新",
          dollor: "59.9"
        },
        {
          word: "眼线胶笔，让你精彩一天",
          dollor: "69"
        },
        {
          word: "复古又减龄的波点T恤",
          dollor: "39.89"
        },
        {
          word: "金属项链性感冷淡风短款",
          dollor: "20.99"
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