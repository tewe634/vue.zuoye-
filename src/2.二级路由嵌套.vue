<template>
  <div id="app">
   <div class="doem">
     <router-link to="/home">首页</router-link>
    <router-link to="/sort">分类</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/mys">我的</router-link>
   </div>
   
    <div class="deom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  .doem {
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }
  .router-link-active {
    background-color: #ccc;
  }
  .router-link-exact-active {
    background-color: pink
  }
</style>
