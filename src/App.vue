<template>
  <div id="app">
    <MyHeader :title="'tarbar案例'" :color="'skyblue'"></MyHeader>
  
      
     <router-view></router-view>
    <MyTabBar :list="tabList" @toggleObj="toggleObj" ></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyTabBar from "@/components/MyTabBar.vue";
import myGoodsList from '@/views/MyGoodsList.vue'
import myGoodsSearch from '@/views/MyGoodsSearch.vue'
import myUserInfo from '@/views/MyUserInfo.vue'
export default {
  name: "App",
  components: {
    MyTabBar,
    MyHeader,
    myGoodsList,
    myGoodsSearch,
    myUserInfo
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
      // adderss:'myGoodsList',
      Cname:'myGoodsList'
    };
  },
  methods: {
    toggleObj(obj) {
     this.$router.push({
      path:`/${obj.componentName}` 
    })
    this.Cname = obj.componentName;
    },

  },
 
};
</script>

<style></style>
