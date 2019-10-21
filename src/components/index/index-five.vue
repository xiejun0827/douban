<template>
  <div class="hello">
    <div class="nav">
      <h1>分类浏览</h1>
    </div>
    <ul>
      <li v-for="(item,ind) in arr" :style="[ind===arr.length-1?{borderBottom:none}:{}]">
        <p>
          {{item.title}}
        </p>
        <img src="../../../static/index/sanjiao_07.jpg" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
  import Swiper from "swiper"
  export default {
    name: 'HelloWorld',
    data () {
      return {
          none:"none",
        arr:[
          {
              title:"经典"
          },
          {
            title:"冷门佳片"
          },
          {
            title:"豆瓣高分"
          },
          {
            title:"动作"
          },
          {
            title:"喜剧"
          },
          {
            title:"爱情"
          },
          {
            title:"悬疑"
          },
          {
            title:"恐怖"
          },
          {
            title:"科幻"
          },
          {
            title:"治愈"
          },
          {
            title:"文艺"
          },
          {
            title:"成长"
          },
          {
            title:"动画"
          },
          {
            title:"华语"
          },
          {
            title:"欧美"
          },
          {
            title:"韩国"
          },
          {
            title:"日本"
          },
        ],
      }
    },
    mounted(){

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
  ul
    margin-left 0.23rem
    overflow hidden
    padding-top 0.01rem
    li
      float left
      height 0.49rem
      width 1.75rem
      border-top 1px solid #eee
      border-bottom 1px solid #eee
      border-right 1px solid #eee
      margin-top -0.01rem
      p
        margin-left .22rem
        line-height 0.49rem
        font-size 0.16rem
        float left
        color #42bd56
      img
         float right
         margin-right 0.18rem
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
