<template>
    <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:item.isDone}" v-for="item in list" :key="item.id"  >
      <div class="view">
      <!-- 通过双向绑定拿到input的值 -->
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{item.name}}</label>
        <button class="destroy" @click="del(item.id)" ></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name:'TodoMain',
  props:['list'],
  methods: {
    // 删除 通过$preant拿到app进行筛选
    del(id){
      // this.$parent.list = this.$parent.list.filter(item => item.id !== id)
      let index = this.$parent.list.findIndex(item => item.id == id)
      this.$parent.list.splice(index,1)
    }
  },
}
</script>

<style>

</style>