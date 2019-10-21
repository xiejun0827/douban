<template>
  <div class="hello">
    <ul>
      <li v-for="(ite,ind) in res" >
        <div class="up">
          <img class="left" :src="ite.images.large" alt="">
          <div class="right">
            <p>{{ite.title}}</p>
            <div class="ooo">
              <span v-if="ite.rating.average===0">暂无评分</span>
              <div v-if="ite.rating.average>0">
                <img v-for="iten in lol" :src="[ite.rating.average/2-iten>
              1?src.img1:ite.rating.average/2-iten<1&&ite.rating.average/2-iten>0?src.img2:src.img3]">
                <i>{{ite.rating.average}}</i>
              </div>
            </div>
            <div class="ppp">
              <span v-for="item in ite.casts">
                {{item.name}}/
              </span>
              <span v-for="itt in ite.genres">
                /{{itt}}
              </span>
              <span >
                /{{ite.pubdates[0]}}
              </span>
            </div>
          </div>
        </div>
        <div class="down">
          <p>
            评语：有英雄并不代表有正义。
          </p>
        </div>
      </li>
    </ul>
    <h1>查看更多豆列</h1>
    <ul class="lll">
      <li v-for="iii in crr">
        {{iii}}
      </li>
    </ul>
    <h3>-{{num}}-</h3>
    <div class="foot">
      <div @click="up()" :style="[i===0?sty:'']">上一页</div>
      <div @click="down()" style="margin-left: 0.1rem" :style="[i===9?sty:'']">下一页</div>
    </div>
  </div>
</template>
<style scoped lang="stylus">
@import "../../assets/main-two.css"
  .hello{
    padding 0 0.31rem 0 0.18rem
  }
</style>
<script>
  export default {
    data () {
      return {
        lol:[0,1,2,3,4],
        src:{
          img1:"../../../static/index/img1.png",
          img2:"../../../static/index/img2.png",
          img3:"../../../static/index/img3.png",
        },
          res:[],
          flag:true,
        name:"",
        brr:[],
        crr:["电影","纪录片","奥斯卡","影人","电影截图"],
        num:1,
        i:0,
        sty:{
            color:"#cccccc"
        }
      }
    },
    methods:{
        up(){
            if(this.i>0){
                this.i--;
                this.num--;
              this.$http({
                url:`https://douban.uieee.com/v2/movie/top250?start=${this.i*25}&count=25`
              })
                .then(res => {
                  this.res = res.data.subjects;
                  document.documentElement.scrollTop=0;
                  console.log(this.res.length);
                })
            }
        },
        down(){
          if(this.i<9){
            this.i++;
            this.num++;
            this.$http({
              url:`https://douban.uieee.com/v2/movie/top250?start=${this.i*25}&count=25`
            })
              .then(res => {
                this.res = res.data.subjects;
                document.documentElement.scrollTop=0;
                console.log(this.res.length);
              })
          }
        }
    },
    mounted(){
      this.$http({
        url:`https://douban.uieee.com/v2/movie/top250?start=${this.i*25}&count=25`
      })
        .then(res => {
          this.res = res.data.subjects;
          console.log(this.res.length);
        })
    },
  }
</script>
