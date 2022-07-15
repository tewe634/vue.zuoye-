<template>
  <div class="wrap">
    <ul class="deom">
      <a
        href="#"
        class="deom1"
        v-for="(item, index) in arr"
        :key="index"
        :class="{ active: index == isShow }"
        @click="show(index)"
        >{{ item }}</a
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["热门", "咖啡", "饮食", "男装", "女装", "眼睛", "内衣"],
      isShow: 0,
    };
  },
  methods: {
    show(index) {
      this.isShow = index;
    },
  },
};
</script>
<style scoped>
.deom {
  list-style: none;
  display: flex;
  font-size: 20px;
}
.active {
  color: red;
}
.deom1 {
  display: block;
  margin: 0 10px;
}
</style>
