
  <template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all"
    class="toggle-all"
    type="checkbox"
    v-model="isAll"
    >
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="title"
      @keyup.enter="add"
    />
  </header>
</template>


<script>

export default {
  name:'TodoHeader',
  data() {
    return {
      title: '',
    }
  },
  props:{
    list: {
      type:Array,
      default:() => []
    }
  },
  methods: {
  // 添加值。先非空校验在添加
    add(){
      if (this.title.trim() == ''){
          this.title = ''
          return alert('请正确输入待办')
      }
      let id = this.list.length === 0 ? 1 : this.list[0].id + 1
      let todoObj = {id:id,name:this.title,isDone:false}
      // 通过自定义事件传给父组件
      this.$emit('addTodo',todoObj)
      this.title = ''
    }
  },
  computed:{
    isAll:{
      set(val){
        this.list.forEach(item => item.isDone = val)
      },
      get(){
        return this.list.every(item => item.isDone == true)
      }
    }
  }
}
</script>

<style>

</style>