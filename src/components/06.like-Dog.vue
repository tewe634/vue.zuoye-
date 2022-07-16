<template>
    <div class="my_div">
    <img :src="dogImgUrl" alt="" />
    <p>{{ dogName }}</p>
  </div>
</template>

<script>
export default {
  name:'dog',
  props:["dogImgUrl","dogName"]
}
</script>

<style scoped>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>