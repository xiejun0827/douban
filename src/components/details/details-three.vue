<template>
  <div class="hello">
    <div class="nav">
      <h1>推选的豆列</h1>
      <p>更多</p>
    </div>
    <ul>
      <li v-for="(item,ind) in arr" :style="[ind==Math.ceil(arr.length/2-1)?ooo:{color:item.color}]">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
  import Swiper from "swiper"
  export default {
    name: 'HelloWorld',
    data () {
      return {
        ooo:{
            width:0.1+"rem",
            height:0.001+"rem",
            display:"block",
            border:"none"
        },
        arr:[
          {title:"同时入选IMDB250和豆瓣电影250的电影",
           color:"#ffac2d"},
          {title:"带你进入不正常的世界",
            color:"#ff4055"},
          {title:"用电【影】来祭奠逝去的岁月",
            color:"#4f9ded"},
          {title:"女孩们的故事【电影】",
            color:"#ffc46c"},
          {title:"",
            color:""},
          {title:"科幻是未来的钥匙——科幻启示录【科幻题材】",
            color:"#2384e8"},
          {title:"美国生活面面观",
            color:"#38a94b"},
          {title:"2015终极期待",
            color:"#42bd56"},
          {title:"经典韩国电影——收集100部",
            color:"#cc3344"},
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
    p
      float right
      font-size 0.12rem
      color #42bd56
      line-height 0.54rem
      margin-right 0.2rem
  ul
    width 100%
    overflow-x auto
    white-space nowrap
    padding-bottom 0.2rem
   li
     height 0.6rem
     border 1px solid #ffac2d
     font-size 0.14rem
     line-height 0.6rem
     padding 0 0.3rem
     margin-left 0.22rem
     margin-top 0.11rem
     border-radius 0.05rem
     display inline-block
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
