<template>
  <div>
  <h1>主页信息</h1>
  <div class="title" >
  <router-link to="/home/homes" >我的主页</router-link>
  <router-link to="/home/gamehome" >游戏主页</router-link>
  <router-link to="/home/meethome" >运动主页</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .title{
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-between;
  }
</style>