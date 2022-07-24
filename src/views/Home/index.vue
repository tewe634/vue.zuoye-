<template>
  <div>
    <p class="title">推荐歌单</p>
    <div>
      <van-row gutter="6">
        <van-col span="8" v-for="obj in list" :key="obj.id">
          <van-image width="100%" height="3rem" fit="cover" :src="obj.picUrl" />
          <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>
    </div>
    <p class="title">最新音乐</p>
    <div style="margin-bottom:48px">
      <van-cell
      v-for="(item, index) in newList"
      :key="index"
      :title="item.name"
      :label="`${item.song.artists[0].name}-${item.name}`"
    >
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" />
      </template>
    </van-cell>
    </div>
  </div>
</template>

<script>
import { renMusicApi, newMusicApi } from "@/api";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      newList: [],
    };
  },
  mounted() {
    this.getList();
    this.getMusic();
  },
  methods: {
    async getList() {
      try {
        const res = await renMusicApi({ limit: 6 });
        this.list = res.data.result;
      } catch (error) {
        console.log(error.message);
      }
    },
    async getMusic() {
      try {
        const res = await newMusicApi({ limit: 20 });
        this.newList = res.data.result;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
