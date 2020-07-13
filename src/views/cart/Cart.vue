<template> 
    <div id="cart">
      <div class="cart-top">
        <div class="shop-car">购物车</div>
        <div class="manange">管理</div>
      </div>
      <div class="car-list">
        <div class="shopMes">
          <div class="cicle"></div>
          <div class="information">信用购物旗舰店铺<span>></span></div>
          <div class="car-cou">领券</div>
        </div>
        <div class="goodsMes">
          <div class="cicle1"></div>
          <div class="goods-img"><img :src="require(`../../assets/img/cart/购物车.png`)" alt=""></div>
          <div class="goods-infor">
            <div class="infot-text">2020夏季新款短袖T恤女<br>休闲后背樱花小个子宽松韩版白色女衣服</div>
            <div class="infor-size">
              <select name="" id="select">
                <option value="">S;白色</option>
                <option value="">M;白色</option>
                <option value="">L;白色</option>
                </select>
              </div>
            <div class="infor-price">
              <div class="infor-money">￥68</div>
              <div class="number">
                <table>
                <th>
                  <td>-</td>
                  <td>1</td>
                  <td>+</td>
                </th>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-bottom">
        <div class="cicle2"></div>
        <div class="add">
          <div class="add-to">合计:<span>￥0</span></div>
          <div class="close">结算</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scope>
#cart{
  background: #f3f3fd;
  height: 100%;
  position: relative;
}
.cart-top{
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
}
.car-list{
  background: #fff;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}
.cicle{
  height: 20px;
  width: 20px;
  border:1px solid #d8d7d7;
  border-radius: 50%;
}
.shopMes{
  display: flex;
}
.information{
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
}
.information span{
  font-weight: normal;
  margin-left: 7px;
}
.car-cou{
  margin-left: 110px;
}
.cicle1{
  margin-top: 40px;
  margin-right: 5px;
  height: 20px;
  width: 20px;
  border:1px solid #d8d7d7;
  border-radius: 50%;  
}
.goodsMes{
  display: flex;
  margin-top: 10px;
}
.goods-img img{
  width: 90px;
  height: 90px;
  margin: 0 5px;
}
.goods-infor{
  width: 200px;
  margin: 5px;
}
.infot-text{
  text-overflow: ellipsis;
  overflow: hidden;
  width: 188px;
  height: 50px;
  white-space: nowrap;
}
#select{
  background: #ececec;
  border-radius: 5px;
  height: 25px;
  color: gray;
  margin: 5px;
}
.infor-money{
  color: #f55407;
  font-size: 20px;
}
.infor-price{
  display: flex;
  margin: 15px 0;
  justify-content: space-between;
}
table{
  border-collapse: collapse;
}
table, th,td{
  border: 1px solid #afa9a9;
  height: 20px;
  width: 81px;
  text-align: center;
}
.cart-bottom{
  background: #fff;
  padding: 10px;
  display: flex;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 49px;
  height: 38px;
  text-align: center;
  line-height: 38px;
}
.cicle2{
  height: 20px;
  width: 20px;
  border: 1px solid #d8d7d7;
  border-radius: 50%;
  margin-top: 9px;
}
.add{
  margin-left: 170px;
  display: flex;
}
.add-to{
  margin: 0 10px;
}
.add-to span{
  color: #f55407;
}
.close{
  background: red;
  width: 90px;
  border-radius: 30px;
  color: #fff;
}

</style>