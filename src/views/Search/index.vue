<template>
  <div>
    <div>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        @input="inputFn"
      />
    </div>
    <div class="search_wrap">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span
          class="hot_item"
          v-for="(item, index) in hotArr"
          :key="index"
          @click="fn(item.first)"
          >{{ item.first }}</span
        >
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap">
      <van-list
        finished-text="没有更多了"
      >
        <van-cell v-for="item in resultList" :key="item.id" :title="item.name" :label="`${item.ar[0].name}-${item.name}`" >
        <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" />
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { hotListApi, searchResultApi } from "@/api";
export default {
  name: "search",
  data() {
    return {
      value: "",
      hotArr: [],
      resultList: [],
    };
  },
  methods: {
    async getList() {
      try {
        const res = await hotListApi();
        this.hotArr = res.data.result.hots;
      } catch (error) {
        console.log(error.message);
      }
    },
    async searchList() {
      try {
        const res = await searchResultApi({
          keywords: this.value,
          limit: 20,
        });
        return res.data.result?.songs || [];
      } catch (error) {
        console.log(error.message);
      }
    },
    async fn(val) {
      this.value = val;
      this.resultList = await this.searchList();
    },
    async inputFn() {
      this.resultList = await this.searchList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
