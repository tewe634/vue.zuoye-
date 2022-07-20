<template>
  <div>
  <input type="text" placeholder="请输入关键词" v-model="user" @keyup.enter="onSubmit">
  </div>
</template>

<script>
export default {
  name:'MyHeader',
  data() {
    return {
      user:''
    }
  },
  props:['getBooks'],
  methods: {
    onSubmit(){
      if (this.user.trim() == '') {
        this.user = ''
        return alert('请输入正确的搜索')
      }
      this.$emit('searchBook',this.user)
      
    }
  },
  watch:{
    user(val){
      if (val.trim() == '') {
        this.getBooks()
      }
    }
  }
};
</script>

<style></style>
