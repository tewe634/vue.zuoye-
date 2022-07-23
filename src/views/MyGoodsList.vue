<template>
  <div>
    <MyTable :arr="list">
      <template #title>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #footer="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
            ref="ipt"
            v-model="scope.row.inputValue"
            @keyup.enter="addFn(scope.row)"
            @keyup.esc="scope.row.inputVisible = false"
          />
          <button style="margin-right: 10px" class="btn btn-primary btn-sm add-tag" v-else
          @click="toggleFn(scope.row)"
         
          >+Tag</button>
          <!-- {{ scope.row.tags }} -->
          <span
            style="margin-right: 8px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm"  @click="del(scope.row.id)">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
  
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [], // 所有数据
    };
  },
  created() {
    axios({
      url: "/api/goods",
    }).then((res) => {
      // console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    toggleFn(obj){
      obj.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.ipt.focus();
      })
    },
    addFn(obj){
      if (obj.inputValue.trim() == '') {
        obj.inputValue = ''
        return alert('请正确输入')
      }
      obj.tags.unshift(obj.inputValue)
      obj.inputValue = ''
      obj.inputVisible = false
    },
    del(id){
      const index = this.list.findIndex(ele => ele.id == id)
      this.list.splice(index, 1)
    }
  },
};
</script>
