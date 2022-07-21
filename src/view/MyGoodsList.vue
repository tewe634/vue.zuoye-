<template>
  <div>
    <MyTbody :list="list">
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
            ref="ipt"
            v-if="scope.row.inputVisible"
            v-model="scope.row.inputValue"
            @keyup.enter="addFn(scope.row)"
          />
          <button style="margin-right:5px" class="btn btn-primary btn-sm add-tag" v-else @click="toggle(scope.row)">+Tag</button>
        <!-- {{ scope.row.tags }} -->
        <span style="margin-right:10px" v-for="(item,index) in scope.row.tags" :key="index"  class="badge badge-warning">{{item}}</span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">删除</button>
        </td>
      </template>
    </MyTbody>
  </div>
</template>

<script>
import MyTbody from "@/components/MyTbody.vue";
export default {
  name: "MyGoodsList",
  data() {
    return {
      list: [],
    };
  },
  components: { MyTbody },
  methods: {
    getTab() {
      this.$axios({
        url: "/api/goods",
      })
        .then((res) => {
          this.list = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除
    del(id){
      const index = this.list.findIndex(ele => ele.id == id)
      this.list.splice(index,1)
    },
    // 切换
    toggle(val){
      val.inputVisible = true
      this.$nextTick(() => {
        this.$refs.ipt.focus()
      })
    },
    // 添加数据
    addFn(val){
    if(val.inputValue.trim() == ''){
        val.inputVisible = ''
        return alert('请正确输入')
    }
      val.tags.unshift(val.inputValue)
      val.inputVisible = false
      val.inputValue = ''
    }
  },
  mounted() {
    this.getTab();
  },
};
</script>

<style></style>
