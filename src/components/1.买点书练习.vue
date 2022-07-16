<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
    <li v-for="(a,index) in arr" :key="a.name">
    {{a.name}}
    <button @click="add(index)">买书</button>
    </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(n,index) in arr" :key="n.name">
      <td>{{index++}}</td>
      <td>{{n.name}}</td>
      <td>{{n.price}}</td>
      <td>{{n.count}}</td>
      <td>{{n.price * n.count}}</td>
      </tr>
    </table>
    <p>总价格为:{{all}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods: {
    add(val){
      this.arr[val].count++
    }
  },
  computed:{
    all() {
      return this.arr.reduce((pre,current) => pre + current.price * current.count,0)
    }
  }
};
</script>
