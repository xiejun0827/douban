<template>
  <div class="hello">
    <main-one></main-one>
    <main-two></main-two>
  </div>
</template>
<style scoped lang="stylus">
  .hello{
    margin-top 0.58rem
  }
</style>
<script>
  import mainOne from "./main/main-one.vue"
  import mainTwo from "./main/main-two.vue"
  export default {
    data () {
      return {

      }
    },
    mounted(){

    },
    components:{
        mainOne,
        mainTwo
    }
  }
</script>
