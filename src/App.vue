<template>
  <div id="app">
  <MyHeader title="购物车" color="skyblue"></MyHeader>
  <div class="deom">
    <MyGoods
    v-for="item in list" :key="item.id"
    :item="item"
    ></MyGoods>
  </div>
  <MyFooter
  :list="list"
  ></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyGoods from '@/components/MyGoods.vue'
import MyFooter from '@/components/MyFooter.vue'
export default {
  name:'App',
  data() {
    return {
      list:[],
    }
  },
  components:{
    MyHeader,
    MyGoods,
    MyFooter
  },
  created(){
    this.$axios({
      url:'/api/cart'
    }).then(res => this.list = res.data.list)
  }
}
</script>

<style scoped>
  .deom {
    margin-top: 40px;
  }
  #app {
    margin-bottom : 40px
  }
</style>
