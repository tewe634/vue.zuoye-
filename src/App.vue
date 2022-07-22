<template>
  <div id="app">
    <MyHeader :title="'tarbar案例'" :color="'skyblue'"></MyHeader>
    <div>
      <router-link to="/myGoodsList" v-if="'myGoodsList' == adderss "></router-link>
      <router-link to="myGoodsSearch" v-if="'myGoodsSearch' == adderss "></router-link>
      <router-link to="myUserInfo" v-if="'myUserInfo' == adderss "></router-link>
      <!-- <router-link to="/myGoodsSearch"></router-link>
    <router-link to="/myUserInfo"></router-link> -->
    </div>
    <MyTabBar :list="tabList" @toggleObj="toggleObj"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyTabBar from "@/components/MyTabBar.vue";
export default {
  name: "App",
  components: {
    MyTabBar,
    MyHeader,
  },
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "myGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "myGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "myUserInfo",
        },
      ],
      adderss:'myGoodsList',
    };
  },
  methods: {
    toggleObj(obj) {
      this.adderss = obj.componentName
    },
   
  },
 
};
</script>

<style></style>
