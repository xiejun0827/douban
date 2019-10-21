<template>
  <div class="hello ccc">
    <one></one>
    <two></two>
    <three></three>
    <four></four>
    <five></five>
  </div>
</template>

<script>
  import one from "./index/index-one.vue"
  import two from "./index/index-two.vue"
  import three from "./index/index-three.vue"
  import four from "./index/index-four.vue"
  import five from "./index/index-five.vue"
export default {
  name: 'HelloWorld',
  components:{
       one,
       two,
       three,
       four,
       five
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ccc{
    width: 3.75rem;
    margin:0.59rem auto 0;
  }
</style>
