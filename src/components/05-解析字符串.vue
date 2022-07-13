<template>
  <div class="container">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:'http://www.baidu.com?name=zhangsan&age=18&sex=nan#'
    };
  },
  mounted() {
      const index1 = this.url.indexOf('?')
      const  index2 = this.url.indexOf('#')
      this.url = this.url.slice(index1+1, index2).split('&')
      let obj = this.url.reduce((pre, current) =>{
         let [key, value] = current.split('=')
        pre[key] = value
        return pre
      },{})
      console.log(obj);
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
