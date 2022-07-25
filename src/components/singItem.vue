<template>
    <van-cell
          :key="id"
          :title="name"
          :label="ahouter"
        >
          <template #right-icon>
            <van-icon name="play-circle-o" size="0.6rem" @click="fn" />
          </template>
        </van-cell>
</template>

<script>
export default {
  props:{
    name:{
      Type: String
    },
    id:{
      Type: Number
    },
    ahouter:{
      Type: String
    }
  },
  methods: {
    fn(){
      this.$router.push({
        path:'/play',
        
      })
    }
  },
}
</script>

<style>

</style>