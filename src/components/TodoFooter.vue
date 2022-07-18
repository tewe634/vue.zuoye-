<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值{{all}}</strong></span>
    <ul class="filters">
      <li>
        <a href="javascript:;" :class="{selected:isShow === 'done'}"  @click="change('done')"  >全部</a>
      </li>
      <li>
        <a href="javascript:;" :class="{selected:isShow === 'no'}"  @click="change('no')">未完成</a>
      </li>
      <li>
        <a href="javascript:;" :class="{selected:isShow === 'yes'}" @click="change('yes')" >已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clear" >清除已完成</button>
  </footer>
</template>

<script>
export default {
  name:'TodoFooter',
  props:['list'],
  data() {
    return {
      isShow:'done'
    }
  },
  methods: {
  // 点击传值切换类名走自定义事件进行
    change(val){
      this.isShow = val
      this.$emit('toggleDone',val)
    },
    // 清除已完成走自定义事件
    clear(){
      this.$emit('clearTodo')
    }
  },
  computed:{
  // 返回没有完成的个数
    all(){
      return this.list.filter(item => item.isDone === false).length
    }
  }
}
</script>

<style>

</style>