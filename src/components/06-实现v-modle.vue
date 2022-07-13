<template>
  <div class="container">
  <input type="text" :value="title" @input="add">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:''
    };
  },
  methods: {
    add(e){
      this.title = e.target.value
    }
  },
};
</script>


