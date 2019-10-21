<template>
  <div class="hello">
    <h1>{{aaa.title}}的短评</h1>
    <ul class="main">
      <li class="main-1" style="border-bottom: 1px solid #aaa" v-for="item in aaa.popular_comments">
        <img src="../../../static/details/d.png" alt="" class="left">
        <div class="right">
          <h2>豆瓣</h2>
          <span class="span1">{{item.created_at}}</span>
          <p>{{item.content}}</p>
          <div>
            <span style="float: left;font-size: 0.12rem;color: #aaa;line-height: 0.19rem"><img src="../../../static/details/ic_like_gray.svg"
                                           alt="" width="16px" height="19px" style="padding-right: 0.06rem">4</span>
            <img src="../../../static/details/more.svg"
                 alt="" width="22px" height="5px" style="float: right;margin-top: 0.07rem">
          </div>
        </div>
      </li>
    </ul>
    <div class="main-2">显示更多评论</div>
    <div class="main-3">
      <img src="../../../static/details/2_03.jpg" alt="">
    </div>
    <h1 style="margin-top: 0.48rem">关于{{aaa.title}}的问答</h1>
    <ul class="main-4">
      <li v-for="ite in arr">
        <p>{{ite.title}}</p>
        <span>{{ite.numL}}回答</span>
      </li>
    </ul>
    <div class="main-2">显示更多问答</div>
  </div>
</template>
<style scoped lang="stylus">
  @import "../../assets/details-two.css"
</style>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
          arr:[
            {title:"大家为什么对国产片这么苛刻？",
            numL:"35"},
            {title:"大家为什么对国产片这么苛刻？",
              numL:"35"},
            {title:"大家为什么对国产片这么苛刻？",
              numL:"35"},
            {title:"大家为什么对国产片这么苛刻？",
              numL:"35"}
          ]
      }
    },
    props:["aaa",],
  }
</script>
