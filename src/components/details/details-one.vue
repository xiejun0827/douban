<template>
  <div class="hello">
    <div class="topp">
      <div class="top-1">
        <h2>{{ccc.title}}</h2>
        <div class="ooo">
          <span v-if="ccc.rating.average===0">暂无评分</span>
          <div v-if="ccc.rating.average>0">
            <img v-for="ite in lol" :src="[ccc.rating.average/2-ite>
              1?src.img1:ccc.rating.average/2-ite<1&&ccc.rating.average/2-ite>0?src.img2:src.img3]">
            <i>{{ccc.rating.average}}</i>
            <b>{{ccc.wish_count}}人评价</b>
          </div>
        </div>
        <ul>
          <li>{{ccc.year}}</li>
          <li v-for="(item,ind) in ccc.directors">
            /{{item.name}}
          </li>
          <li>/{{ccc.countries[0]}}</li>
        </ul>
        <p>用App查看影人资料</p>
      </div>
      <div class="top-2">
        <img :src="ccc.images.medium" alt="">
      </div>
    </div>
    <div class="banner">
      <div>想看</div>
      <div style="margin-left: 0.12rem">看过</div>
    </div>
    <div class="banner-1">
      <h2>{{ccc.title}}</h2>
      <p>{{ccc.summary}}</p>
    </div>
    <h1>查看更多分类</h1>
    <ul class="banner-2">
      <li v-for="ite in ccc.tags">
        {{ite}}
      </li>
    </ul>
    <h1>{{ccc.title}}的图片</h1>
    <ul class="banner-3">
      <li><img :src="ccc.images.medium" alt=""></li>
      <li><img :src="ccc.images.medium" alt=""></li>
      <li><img :src="ccc.images.medium" alt=""></li>
      <li><img :src="ccc.images.medium" alt=""></li>
      <li><img :src="ccc.images.medium" alt=""></li>
    </ul>
  </div>
</template>
<style scoped lang="stylus">
  @import "../../assets/details-one.css"
  .hello{
    margin-top 0.58rem
  }
  .topp{
    overflow hidden
    margin-top 1rem
  }
  .top-1{
    float left
    width 2.08rem
    padding-left 0.22rem
  }
  .top-1 p{
    margin-top 0.19rem
    font-size 0.12rem
    color #42bd56
  }
  .top-1 h2{
    font-size 0.2rem
  }
  .top-1 ul{
    margin-top 0.26rem
    overflow hidden
  }
  .top-1 ul li{
    float left
    font-size 0.12rem
    color #494949
    line-height 0.22rem
  }
  .ooo img{
    width 0.16rem;
    height 0.16rem
  }
  .ooo{
    width 100%
    height 0.2rem
    text-align center
    margin-top 0.08rem
    font-size 0.12rem
    color #aaaaaa
  }
  .ooo span{
    display block
    width 100%
    height 0.2rem
    text-align center
    font-size 0.12rem
    color #aaaaaa
  }
  .ooo i{
    line-height 0.2rem
    font-size 0.14rem
    color #aaaaaa
  }
  .ooo b{
    line-height 0.2rem
    font-size 0.14rem
    color #aaaaaa
    margin-left 0.07rem
  }
  .top-2{
    float left
    width 0.98rem
    height 1.68rem
    padding-right 0.22rem
    margin-top 0.2rem
  }
  .top-2 img{
    width 1.2rem
    height 1.68rem
  }
</style>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        lol:[0,1,2,3,4],
        src:{
          img1:"../../../static/index/img1.png",
          img2:"../../../static/index/img2.png",
          img3:"../../../static/index/img3.png",
        },
        id:"",
        arr:{},
      }
    },
    props:["ccc",],
  }
</script>
