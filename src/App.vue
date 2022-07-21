
<template>
  <div id="app">
    <MyHearder
    title="tabbar案例"
    ></MyHearder>
    <div style="margin-top:45px">
    <component :is="componentName"></component>
    </div>
    <MyFooter
      :list="tabList"
    ></MyFooter>
  </div>
</template>

<script>
import MyHearder from '@/components/MyHearder.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyGoodsList from '@/view/MyGoodsList.vue'
import MyGoodsSearch from '@/view/MyGoodsSearch.vue'
import MyUserInfo from '@/view/MyUserInfo.vue'
export default {
  name:'App',
  components:{
    MyHearder,
    MyFooter,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  data() {
    return {
      componentName:'MyGoodsList',
      tabList: [
    {
        iconText: "icon-shangpinliebiao",
        text: "商品列表",
        componentName: "MyGoodsList"
    },
    {
        iconText: "icon-sousuo",
        text: "商品搜索",
        componentName: "MyGoodsSearch"
    },
    {
        iconText: "icon-user",
        text: "我的信息",
        componentName: "MyUserInfo"
    }
]
    }
  },
}
</script>

<style>

</style>