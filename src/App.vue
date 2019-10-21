<template>
  <div id="app">
    <top class="top"></top>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
  import top from "./components/top.vue"
  import foot from "./components/foot.vue"
export default {
  name: 'App',
  components:{
      top,
      foot
  }
}
</script>

<style>
  @import "assets/reset.css";
  #app{
    position: relative;
  }
  .top{
    position: fixed;
    top: 0;
    z-index: 1;
    background: white;
  }
</style>
