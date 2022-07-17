<template>
  <div>
    <table
      border="1"
      width="700"
      style="border-collapse: collapse"
    >
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox"  /> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <shopping
        v-for="(item,index) in goodList" :key="index"
        :obj="item"
        :index="index"
        @delect="delect"
       
        />
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">
           <HeJI :all="all"/>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import shopping from './components/6.shopping.vue'
import HeJI from './components/7-heji.vue'
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
      
    };
  },
  components:{
    shopping,
    HeJI
  },
  methods: {
    delect(index) {
      this.goodList.splice(index,1)
    },
    to(){
      this.done = !this.done
    }
  },
  computed:{
    all(){
      return this.goodList.reduce((pre,current) => {
        return pre += (current.price* current.num)
      },0)
    }
  }
};
</script>
