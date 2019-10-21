<template>
  <div class="hello">
    <div class="up">
      <p @click="$router.go(-1)">关闭</p>
      <input type="text" placeholder="" @focus="flag=false" @blur="flag=true">
      <img src="../../static/classify/class_03.jpg" alt="" v-show="flag">
    </div>
    <ul style="margin-top: 0.58rem">
      <li v-for="ite in arr">
        <p :style="{color:ite.color}">{{ite.txt}}</p>
        <span>{{ite.txt1}}</span>
      </li>
    </ul>
    <div class="down" style="border-top: 1px solid #f3f3f3">
      <div class="left">注册账号</div>
      <span></span>
      <div class="right">登录豆瓣</div>
    </div>
    <div class="down">
      <div class="left">使用桌面版</div>
      <span></span>
      <div class="right">使用豆瓣APP</div>
    </div>
  </div>
</template>
<style scoped lang="stylus">
  @import "../assets/classify.css"
  .hello{
    position relative
  }
  .up{
    position fixed
    width 3.75rem
    height 0.57rem
    border-bottom 1px solid #f2f2f2
    background white
    z-index 2
    top 0
  }
</style>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
          flag:true,
          arr:[
            {
                txt:"电影",
                txt1:"影院热映",
                color:"#2384e8"
            },
            {
              txt:"电视",
              txt1:"正在热播",
              color:"#7a6adb"
            },
            {
              txt:"图书",
              txt1:"畅销排行",
              color:"#9f7860"
            },
            {
              txt:"同城",
              txt1:"周末活动",
              color:"#e6467e"
            },
            {
              txt:"小组",
              txt1:"志趣相投",
              color:"#2ab8cc"
            },
            {
              txt:"音乐",
              txt1:"新碟榜",
              color:"#f48f2e"
            },
            {
              txt:"阅读",
              txt1:"电子书",
              color:"#9f7860"
            },
            {
              txt:"游戏",
              txt1:"虚拟世界",
              color:"#5774c5"
            },
            {
              txt:"应用",
              txt1:"玩手机",
              color:"#596cdd"
            },
            {
              txt:"东西",
              txt1:"心爱之物",
              color:"#e1644d"
            },
            {
              txt:"FM",
              txt1:"红心歌单",
              color:"#69cfa9"
            },
            {
              txt:"市集",
              txt1:"购买原创",
              color:"#42bd56"
            },
          ]
      }
    },
    methods:{

    }
  }
</script>
