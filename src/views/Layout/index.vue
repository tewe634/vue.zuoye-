<template>
  <div>
    <div class="title">
      <van-nav-bar :title="$route.meta.title" />
    </div>
    <router-view></router-view>
    <div>
      <van-tabbar route>
      <van-tabbar-item icon="home-o" to='/layout/home' >主页</van-tabbar-item>
      <van-tabbar-item icon="search" to='/layout/search'>搜索</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
 
};
</script>

<style scoped>

</style>
