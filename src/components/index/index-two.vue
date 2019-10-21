<template>
  <div class="hello">
    <div class="nav">
      <h1>{{arr.title}}</h1>
      <p>更多</p>
    </div>
    <div class="swiper-container">
      <div class="swiper-slide" v-for="(item,ind) in arr.subjects" @click="send(item.id)">
        <img :src="item.images.large" alt="">
        <p>{{item.title}}</p>
        <div class="ooo">
          <span v-if="item.rating.average===0">暂无评分</span>
          <div v-if="item.rating.average>0">
            <img v-for="ite in ooo" :src="[item.rating.average/2-ite>1?src.img1:item
            .rating.average/2-ite<1&&item.rating.average/2-ite>0?src.img2:src.img3]">
            <i>{{item.rating.average}}</i>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>
<script>
  import Swiper from "swiper"
  export default {
    name: 'HelloWorld',
    data () {
      return {
        ooo:[0,1,2,3,4],
        src:{
          img1:"../../../static/index/img1.png",
          img2:"../../../static/index/img2.png",
          img3:"../../../static/index/img3.png",
        },
        img:"",
        arr:{},
      }
    },
    methods:{
      send(x){
        this.$router.push({
          path:"/details",
          query:{id:x}
        })
      }
    },
    mounted(){
      this.$http({
        url:"../../../static/index/two.json"
      })
        .then(res => {
          this.arr = res.data;
        });
    }
  }
</script>
<style scoped lang="stylus">
  .nav
    overflow hidden
    height 0.54rem
    h1
      float left
      font-size 0.16rem
      line-height 0.54rem
      margin-left 0.2rem
    p
      float right
      font-size 0.12rem
      color #42bd56
      line-height 0.54rem
      margin-right 0.2rem


  .swiper-container {
    width: 100%;
    display flex
    box-sizing border-box
    overflow-x:auto
  }
  .swiper-slide {
    font-size: 0.18rem;
    background: #fff;
    width: 1.29rem;
    margin-left 0.03rem
    float left
  }
  .swiper-slide img{
    width: 1.29rem;
    height 1.8rem
  }
  .swiper-slide p{
    width 100%
    text-align center
    margin-top 0.17rem
    font-size 0.14rem
  }
  .swiper-slide .ooo img{
    width 0.16rem;
    height 0.16rem
  }
  .swiper-slide .ooo{
    width 100%
    height 0.2rem
    text-align center
    margin-top 0.08rem
    font-size 0.12rem
    color #aaaaaa
  }
  .swiper-slide .ooo span{
    display block
    width 100%
    height 0.2rem
    text-align center
    font-size 0.12rem
    color #aaaaaa
  }
  .swiper-slide .ooo i{
    line-height 0.2rem
    font-size 0.14rem
    color #aaaaaa
  }
  .swiper-slide:nth-child(1) {
    margin-left 0.22rem
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
