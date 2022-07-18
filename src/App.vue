<template>
  <div id="app">
  <TodoHeader
  :list="list"
  @addTodo="addTodo"
  />
  <TodoMain
  :list="goodList"
  />
  <TodoFooter
  :list="list"
  @toggleDone="toggleDone"
  @clearTodo="clearTodo"
  />
  </div>
</template>

<script>
import TodoFooter from '@/components/TodoFooter.vue'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoMain from '@/components/TodoMain.vue'
import './assets/base.css'
import './assets/index.css'
export default {
  name:'App',
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
    // 去本地浏览器取值
      list: JSON.parse(localStorage.getItem('list')) || [],
      isAll:'done'
    }
  },
  methods: {
    // 添加到第一个值
    addTodo(val){
      this.list.unshift(val)
    },
    // 切换已完成未完成
    toggleDone(val){
      this.isAll = val
    },
    // 清除已完成
    clearTodo(){
      this.list = this.list.filter(item => !item.isDone)
    }
  },
  computed:{
  // 当传入的值相同时，筛选数据返回对应的数据
      goodList(){
        if (this.isAll === 'no') {
            return this.list.filter(item => !item.isDone)
        } else if(this.isAll === 'yes') {
            return this.list.filter(item => item.isDone)
        } else {
          return this.list
        }
      }
  },
  watch:{
    list:{
      deep:true, // 开启深度监视，监视布尔值
      handler(val){
      // 将数据保存到本地浏览器中
        localStorage.setItem('list', JSON.stringify(val))
      }
    }
  }
}
</script>

