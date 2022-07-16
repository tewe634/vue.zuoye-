<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="checked">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="delct(item.id)">删除</button>
            <button @click="info(item, index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      list: [{ id: 1, name: "张三", age: 18, sex: "男" }],
      name: "",
      age: 0,
      checked: "",
      isShow: false,
      id1: "",
    };
  },
  methods: {
    // 添加修改的
    add() {
      if (!this.isShow) {
        if (
          // 判断是不是空的
          this.name.trim() == "" ||
          this.age == 0 ||
          this.checked.trim() == ""
        ) {
          this.name = "";
          this.age = "";
          return alert("请正确添加");
        }
        // 设置一个对象
        let todoObj = {
          name: this.name,
          age: this.age,
          sex: this.checked,
          id: nanoid(),
        };
        // 添加进去再清空
        this.list.push(todoObj);
        this.name = "";
        this.age = 0;
        this.checked = "";
      } else {
        // 当修改时，遍历list的数据，重新赋值到下面
        this.list.forEach((item) => {
          if (item.id == this.id1) {
            item.sex = this.checked;
            item.name = this.name;
            item.age = this.age;
          }
        });
      }
    },
    // 删除
    delct(id) {
      let index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    // 编辑
    info(item, index) {
      this.isShow = true;
      if (this.list[index].id == item.id) {
        // 点击的id等于list里面的id将值赋值上去
        this.name = item.name;
        this.age = item.age;
        this.checked = item.sex;
        this.id1 = item.id;
        console.log(this.obj);
      }
    },
  },
};
</script>
