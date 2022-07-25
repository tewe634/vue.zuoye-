<template>
  <div>
    <div>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        @input="inputFn"
      />
    </div>
    <div class="search_wrap" v-if="resultList.length == 0">
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
    <div class="search_wrap" style="margin-bottom: 45px" v-else>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SingItem v-for="item in resultList" 
        :key="item.id" 
        :name="item.name"
        :id="item.id"
        :ahouter="`${item.ar[0].name}-${item.name}`"
        ></SingItem>
      </van-list>
    </div>
  </div>
</template>

<script>
import SingItem from '@/components/singItem.vue'
import { hotListApi, searchResultApi } from "@/api";
export default {
  name: "search",
  data() {
    return {
      value: "",
      hotArr: [],
      resultList: [],
      loading: false,
      finished: false,
      page: 1,
      limit: 20,
      timer:null
    };
  },
  components:{
    SingItem
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
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        return res.data.result;
      } catch (error) {
        console.log(error.message);
      }
    },
    // 点击
    async fn(val) {
      this.finished = true;
      this.loading = false;
      try {
        this.value = val;
        const res = await this.searchList();
        this.resultList = res?.songs || [];
      } catch (error) {
        console.log(error.message);
      }
    },
    // ipt输入
    async inputFn() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(async() =>{
       this.finished = true;
      this.loading = false;
      try {
        const res = await this.searchList();
        this.resultList = (res && res.songs) || [];
      } catch (error) {
        console.log(error.message);
      }
     },1000)
    },
    async onLoad() {
      setTimeout(async () => {
        this.page++;
        const res = await this.searchList();
        if (!res.songs) {
          this.finished = true;
          this.loading = false;
          return;
        }
        this.resultList = [...this.resultList, ...(res.songs || [])];
        this.loading = false;
      }, 500);
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
