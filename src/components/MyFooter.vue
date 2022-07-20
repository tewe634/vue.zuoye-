<template>
  <div>
    <el-input v-model="bookname" placeholder="请输入书名"></el-input>
    <el-input v-model="author" placeholder="请输入作者"></el-input>
    <el-input v-model="publisher" placeholder="请输入出版社"></el-input>
      <el-button type="primary" @click="add">添加</el-button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    data() {
      return {
        bookname:'',
        author: '',
        publisher: '',
      }
    },
    methods: {
      add(){
      if (this.bookname.trim() == '' || this.author.trim() == '' ||this.publisher.trim() == '') { 
          this.bookname = ''
          this.author = ''
          this.publisher = ''
          return alert('请正确添加')
      }
      this.$emit('postBook', this.bookname, this.author, this.publisher)
          this.bookname = ''
          this.author = ''
          this.publisher = ''
    }
    },
}
</script>

<style>
.el-input__inner {
  width:300px !important;
}
</style>