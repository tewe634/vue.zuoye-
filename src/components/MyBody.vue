<template>
  <div>
    <thead style="border: 1px solid #000">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>作者</th>
        <th>出版社</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.bookname }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.publisher }}</td>
        <td v-show="item.id"><a href="#" @click="del(item.id)">删除</a></td>
        <td v-show="item.id">
          <a href="#" style="margin-left: 10px" @click="look(item.id)"
            >查看详情</a
          >
        </td>
      </tr>
    </tbody>

    <p v-if="isshow">没有搜索到内容</p>
  </div>
</template> 

<script>
export default {
  name: "MyBody",
  props: ["list"],
  data() {
    return {
      isshow: false,
    };
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        val.forEach((item) => {
          if (Array.isArray(item)) {
            this.isshow = true;
          }
        });
      },
    },
  },
  methods: {
    del(id) {
      this.$emit("delectObj", id);
    },
    look(id) {
      this.$emit("lookBook", id);
    },
  },
};
</script>

<style></style>
