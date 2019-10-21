<template>
  <div class="hello">
    <div class="top">
      <div class="left">
        <img src="../../static/top/left_01.jpg" alt="" @click="$router.go(-1)">
      </div>
      <div class="right">
        <img src="../../static/top/right_03.jpg" alt="" @click="send()">
      </div>
      <ul>
        <li v-for="(item,ind) in msg" :key="ind" :style="{color:item.color}">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="stylus">
  .top
       width 100%
       overflow hidden
       height 0.58rem
       border-bottom 0.01rem solid #f3f3f3
       .left
         float left
        ul
         float right
         height 0.58rem
         li
          float left
          font-size 0.16rem
          line-height 0.58rem
          padding-left 0.15rem
       .right
         float right
</style>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: [
            {title:"电影",
             color:"#2384e8"
            },
          {title:"图书",
            color:"#9f7860"
          },
          {title:"广播",
            color:"#e4a813"
          },{title:"小组",
            color:"#65b8cf"
          }]
      }
    },
    methods:{
        send(){
            this.$router.push(
              {
                path:"/classify"
              }
            )
        }
    }
  }
</script>
