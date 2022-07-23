<template>
  <div>
    <div class="title">
      <router-link to="/two/four" >All-content</router-link>
      <router-link to="/two/five" >Alice</router-link>
      <router-link to="/two/six" >Bob</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
  .title {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
 
</style>
