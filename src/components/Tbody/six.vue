<template>
  <div>
  <button @click="toggle(arr[Math.floor(Math.random()*3)])">随机显示</button>
    <div>
      Bob
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
      return {
        arr:['/two/six/seven','/two/six/eigth','/two/six/nine']
      }
    },
    methods: {
      toggle(val){
        console.log(val);
        this.$router.push({
          // name:val
          path:val
          })
          console.log(this.$router.currentRoute.fullPath);
      }
    },
}
</script>

<style>

</style>