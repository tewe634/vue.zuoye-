<template>
  <div id="app">
  <MyHeader
  @searchBook="searchBook"
  ></MyHeader>
  <MyBody :list="list"
    @delectObj="delectObj"
    @lookBook="lookBook"
  ></MyBody>
  <MyFooter
  @postBook="postBook"
  ></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyBody from '@/components/MyBody.vue'
import MyFooter from '@/components/MyFooter.vue'
export default {
  name:'App',
  components:{
    MyHeader,
    MyBody,
    MyFooter
  },
  data(){
    return {
      list:[]
    }
  },
  methods: {
    getBooks(){
      this.$axios({
        url:'/api/getbooks',
      }).then(res => {
      
        this.list = res.data.data
      })
    },
    searchBook(val){
     this.list = this.list.map(item => {
      if (item.bookname == val) {
        return  item
      } else {
        return []
      }
      })
    },
    postBook(bookname,author,publisher){
        this.$axios({
          url:'/api/addbook',
          method:'POST',
          data:{
         bookname:bookname,
         author: author,
         publisher: publisher}
        }).then( res=> {
          alert(res.data.msg)
        }).catch(err => {
          console.log(err);
        })
        this.getBooks()
    },
    delectObj(id){
        this.$axios({
          url:'api/delbook?id=' + id,
        }).then( res => {
          console.log(res)
        }).catch(err => {
            console.log(err)
        })
       this.getBooks()
    },
    lookBook(id){
    console.log(id);
      let a 
      a = this.list.filter(item => item.id == id)
      alert(`书名：${a[0].bookname},作者：${a[0].author},出版社：${a[0].publisher}`)
    }
  },
  mounted() {
    this.getBooks()
  },
};
</script>

<style></style>
