<template>
  <div>
    <div class="tab-control">
      <div v-for="(item,index) in titles" 
          :key="index" 
          class="products-item"
          :class="{active: index === currentIndex}"
          @click="btnItemClick(index,item.tabPath)">
        <span>{{item.tabName}}</span>
      </div>
    </div>
    
    <!-- <div class="c-detail">
     <div v-show="currentIndex==0">
      <ul class="detailsUl">
        <li v-for="(item,index) in tabList1" :key="index" class="tablist1">
          <div class="list1">
            <div class="imgBox"><img :src="require(`../../../assets/img/${index}.jpg`)" alt=""></div>
            <div class="list1-descript">{{item.descript}}</div>
            <div class="list1-price">{{item.price}}</div>
          </div>
        </li>
      </ul>
    
    
    </div>
    <div v-show="currentIndex==1">
      <ul class="detailsUl">
        <li v-for="(item,index) in tabList2" :key="index" class="tablist1">
          <div class="list1">
            <div><img :src="require(`../../../assets/img/${index}.jpg`)" alt=""></div>
            <div class="list1-descript">{{item.descript}}</div>
            <div class="list1-price">{{item.price}}</div>
          </div>
        </li>
      </ul> 
    </div>
    <div v-show="currentIndex==2" >
      
    </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      tabList1:[
        {
          imgSrc:'~assets/img/0.jpg',
          descript:'商品详情',
          price:'22'
        },
        {
          imgSrc:'~assets/img/1.jpg',
          descript:'商品详情',
          price:'22'
        },
        {
          imgSrc:'~assets/img/2.jpg',
          descript:'商品详情',
          price:'22'
        },
        {
          imgSrc:'~assets/img/3.jpg',
          descript:'商品详情',
          price:'22'
        },
      ],
      tabList2:[
        {
          imgSrc:'~assets/img/0.jpg',
          descript:'shangpingmiaoshu',
          price:'9999.99'
        },
        {
          imgSrc:'~assets/img/0.jpg',
          descript:'shangpingmiaoshu',
          price:'9999.99'
        },
        {
          imgSrc:'~assets/img/0.jpg',
          descript:'shangpingmiaoshu',
          price:'9999.99'
        },
        {
          imgSrc:'~assets/img/0.jpg',
          descript:'shangpingmiaoshu',
          price:'9999.99'
        }
      ]
    }
  },
  methods: {
    btnItemClick(index, tabPath) {
      this.currentIndex = index;
      this.$router.push(tabPath)
    }
  }
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #fff;
  position: sticky;
  top: 0px;
  line-height: 30px;
  margin: 10px 0 10px 0;
}
.products-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}

.active span{
  padding: 5px;
  border-bottom: 3px solid var(--color-text);
}

.detailsUl{
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
}
.tablist1{
  width: 50%;
}
.list1{
  margin: 5px;
}
.list1 .imgBox{
  height: 160px;
}
.list1-descript{
  text-align: center;
    margin: 5px 0px;
}
.list1-price{
  text-align: center;
    font-size: 20px;
    color: deeppink;
}
.list1 img{
  width: 100%;
  height: 100%;;
}

</style>