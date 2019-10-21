<template>
  <div class="hello">
    <details-one :ccc="arr"></details-one>
    <details-two :aaa="arr"></details-two>
    <details-three :aaa="arr"></details-three>
  </div>
</template>
<style scoped lang="stylus">
  .hello{
    margin-top 0.58rem
  }
</style>
<script>
  import detailsOne from "./details/details-one.vue"
  import detailsTwo from "./details/details-two.vue"
  import detailsThree from "./details/details-three.vue"
  export default {
    name: 'HelloWorld',
    data () {
      return {
          id:"",
        arr:{},
      }
    },
    mounted(){
      this.id =this.$route.query.id;
      this.$http({
        url:`https://douban.uieee.com/v2/movie/subject/${this.id}`
      })
        .then(res => {
          this.arr=res.data;
          console.log(this.arr);
        })
    },
    components:{
        detailsOne,
        detailsTwo,
        detailsThree
    }
  }
</script>
