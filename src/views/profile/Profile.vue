<template>
  <div class="profile">
    <div class="user">
      <div class="user-text">
        <div class="text-name">用户名12234</div>
        <div class="text-set">设置</div>
      </div>
      <div class="user-message">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="my-order">
      <div class="order-text">
        <div>我的订单</div>
        <div>查看全部</div>
      </div>
      <div class="order-messages">
        <div class="messages-text">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="scroll">轮播图</div>
    <div class="my-tools">
      <div class="tools-text">
        <div>我的工具</div>
        <div>查看全部</div>
      </div>
      <div class="all-tools">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.profile{
background: #f7f4f4;
}
.user{
  background: #ffcbcb;
  height: 100px;
  margin-bottom: 10px;
  color: #fff;
  
}
.user-text{
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 20px;
}
</style>

