<template>
  <div class="my-tab-bar">
    <div class="tab-item"
    v-for="(item,index) in list"
    :key="index"
    :class="{current:clickIndex === index}"
    @click="clickFn(item,index)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:{
    list:{
      type:Array,
      default:() => [],
      // 校验传入数据的条数
      validator(val){
        if (val.length >= 2 && val.length <= 5) {
          return true
        } else {
          return false
        }
      }
    }
  },
  data() {
    return {
      clickIndex:0,
    }
  },
  methods: {
  // 点击切换类名，切换动态组件
    clickFn(obj,index) {
      this.clickIndex = index
      this.$parent.componentName = obj.componentName
    }
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
