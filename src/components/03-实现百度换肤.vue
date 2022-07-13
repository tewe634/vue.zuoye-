<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" @mouseenter="add" @click="enter" />
      <img src="./assets/02.jpg" alt="" @mouseenter="add" @click="enter" />
      <img src="./assets/03.jpg" alt="" @mouseenter="add" @click="enter" />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="imgUrl" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img1 from "./assets/01.jpg";
export default {
  data() {
    return {
      imgUrl:img1,
    };
  },
  methods: {
    add(e) {
      this.imgUrl = e.target.src
    },
    enter(e){
      this.imgUrl = e.target.src
      document.body.style.background = `url(${e.target.src}) no-repeat 0 0/cover`
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
