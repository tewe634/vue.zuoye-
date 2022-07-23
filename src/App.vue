<template>
  <div id="app">
    <MyHeader :title="'tarbar案例'" :color="'skyblue'"></MyHeader>
     <div style="margin-top:45px">
     <router-view></router-view>
     </div>
    <MyTabBar :list="tabList" @toggleObj="toggleObj" ></MyTabBar>
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
      
    };
  },
  methods: {
    toggleObj(obj) {
     this.$router.push({
      path:`/${obj.componentName}` 
    })

    },

  },
 
};
</script>

<style></style>
