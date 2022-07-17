<template>
  <tr>
    <td><input type="checkbox" ></td>
    <td>{{obj.name}}</td>
    <td>{{obj.price}}</td>
    <td>
    <button @click="minus">-</button>
    {{obj.num}}
    <button @click="add">+</button>
    </td>
    <td>{{obj.num*obj.price}}</td>
    <td><button @click="del(index)">删除</button></td>
  </tr>
</template>

<script>
export default {
    name:'shopping',
    props:['obj','delect','index'],
    data() {
      return {
       
      }
    },
    methods: {
      add(){
        this.obj.num++
      },
      minus(){
        this.obj.num--
      if (this.obj.num == 0) {
        this.obj.num = 1
      }
        
      },
      del(index) {
        this.$emit('delect',index)
      },
    },
  
}
</script>

<style>

</style>