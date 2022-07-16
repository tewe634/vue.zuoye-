<template>
  <div>
    <!-- 无id时, 可以使用index(反正也是就地更新) -->
    <div
      style="display: inline-block"
      v-for="(n,index) in arr" :key="index"
    >
      <input type="checkbox" :value="n" v-model="num"  />
      <span>{{n}}</span>
    </div>
    <p>你选中的元素, 累加的值和为:{{all}} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      num:[]
    };
  },
  computed:{
    all() {
      return this.num.reduce((pre,current) =>{
        pre += current
        return pre
      },0)
    }
  }
};
</script>