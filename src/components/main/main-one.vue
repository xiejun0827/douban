<template>
  <div class="hello">
    <h1>{{res.title}}</h1>
    <h2>{{res.name}}</h2>
    <p v-show="flag">{{res.referral[0]}}</p>
    <div class="d1" v-show="flag">
      <span class="p2">{{res.referral[1]}}</span><span  class="p3" @click="flag=false">展开</span>
    </div>
    <ul v-show="!flag">
      <li v-for="item in res.referral">
        {{item}}
      </li>
    </ul>
    <div class="d2">
      <b>
        <img src="../../../static/main/ic_like@2x.png" alt="">
        <i>{{res.like}}</i>
      </b>
      <b style="padding: 0.11rem 0.17rem;margin-left: 0.05rem">...</b>
    </div>
  </div>
</template>
<style scoped lang="stylus">
  .hello{
    padding 0 0.4rem
  }
  h1{
    font-size 0.2rem
    width 100%
    text-align center
    padding-top 0.32rem
    padding-bottom 0.24rem
  }
  h2{
    width 100%
    text-align center
    font-size 0.14rem
    padding-bottom 0.21rem
  }
    p{
      width 100%
      text-align center
      line-height 0.18rem
    }
  .d1{
    overflow hidden
  }
  .p2{
    display inline-block
    float left
    width 1rem
    margin-left 0.8rem
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .p3{
    display inline-block
    float left
    color green
  }
  li{
    width 100%
    text-align center
    line-height 0.18rem
  }
  .d2{
    overflow hidden
    width 100%
    padding-left 0.64rem
    padding-top 0.22rem
  }
  .d2 b{
    float left
    border 1px solid #42bd56
    border-radius 5px
    padding 0.1rem 0.17rem
    color #42bd56
  }
  .d2 img{
    width 0.16rem
    height 0.14rem
  }
</style>
<script>
  export default {
    data () {
      return {
          res:{},
          flag:true
      }
    },
    mounted(){
      this.res = this.$route.query.res;
    },
    components:{

    }
  }
</script>
