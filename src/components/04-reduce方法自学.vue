<template>
  <div class="container"></div>
</template>

<script>
export default {
  data() {
    return {
      str: "asdasdasdasdasdasd",
    };
  },
  mounted() {
    this.str = this.str.split("");
    let num = this.str.reduce((pre, current) => {
      console.log(pre, current);
      if (current in pre) {
        pre[current]++;
      } else {
        pre[current] = 1;
      }
      return pre;
    }, {});
    console.log(num);
  },
};
</script>
