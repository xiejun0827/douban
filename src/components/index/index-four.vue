<template>
  <div class="hello">
    <div class="nav">
      <h1>发现好电影</h1>
      <p >更多</p>
      <!--<router-link to="/main">asdasd</router-link>-->
    </div>
    <ul>
      <li @click="sen(transmit[ind])" v-for="(item,ind) in arr"
          :style="[ind==Math.ceil(arr.length/2-1)?ooo:{color:item.color}]"
      >{{item.title}}</li>
    </ul>
    <!--<router-view></router-view>-->
  </div>
</template>
<script>
  import Swiper from "swiper"
  export default {
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
        transmit:[
          {
            title:'同时入选IMDB250和豆瓣电影250的电影',
            name:'东方快车',
            like:'221589',
            referral:[
              '同时入选IMDB250和豆瓣电影250的电影',
              '2018年11月29日更新',
              '感谢影迷朋友对这个豆列的支持，已经有超过200000人关注了，根据IMDB250和豆瓣电影250最新排名进行更新，并增加了其他只进入IMDBtop100或豆瓣电影top100的影片，希望大家继续支持。',
              '超过3 部电影入选的导演统计：',
              '克里斯托弗·诺兰 （6部）：同时入选IMDB250和豆瓣电影250的电影 盗梦空间   蝙蝠侠：黑暗骑士  蝙蝠侠：黑暗骑士崛起  星际穿越  致命魔术  记忆碎片',
              '宫崎骏 （6部）：同时入选IMDB250和豆瓣电影250的电影   千与千寻  龙猫  幽灵公主  天空之城  哈尔的移动城堡    风之谷',
              '斯坦利·库布里克（6部）：同时入选IMDB250和豆瓣电影250的电影   发条橙   进入IMDBtop100或豆瓣电影top100的电影  2001太空漫游  奇爱博士  闪灵  光荣之路  全金属外壳',
              '昆汀·塔伦蒂诺 （4部）：同时入选IMDB250和豆瓣电影250的电影：低俗小说  无耻混蛋  被解救的姜戈   进入IMDBtop100或豆瓣电影top100的电影  落水狗',
              '史蒂文·斯皮尔伯格（4部）：同时入选IMDB250和豆瓣电影250的电影：辛德勒的名单  拯救大兵瑞恩  猫鼠游戏  进入IMDBtop100或豆瓣电影top100的电影  夺宝奇兵  ',
              '大卫·芬奇（4部）：同时入选IMDB250和豆瓣电影250的电影：搏击俱乐部  七宗罪   消失的爱人  进入IMDBtop100或豆瓣电影top100的电影  本杰明·巴顿奇事',
              '查理·卓别林（4部）：同时入选IMDB250和豆瓣电影250的电影：城市之光  摩登时代 进入IMDBtop100或豆瓣电影top100的电影 大独裁者  寻子遇仙记',
              '希区柯克（4部）：同时入选IMDB250和豆瓣电影250的电影：惊魂记  进入IMDBtop100或豆瓣电影top100的电影  后窗 迷魂记  西北偏北',
              '赛尔乔·莱翁内（4部）：同时入选IMDB250和豆瓣电影250的电影：美国往事  黄金三镖客 进入IMDBtop100或豆瓣电影top100的电影  西部往事  黄昏双镖客',
              '詹姆斯·卡梅隆（4部）：同时入选IMDB250和豆瓣电影250的电影：终结者2   进入IMDBtop100或豆瓣电影top100的电影 泰坦尼克号 阿凡达  异形2',
              '比利·怀尔德（4部）：同时入选IMDB250和豆瓣电影250的电影：控方证人   进入IMDBtop100或豆瓣电影top100的电影 日落大道  双重赔偿  桃色公寓',
              '马丁·斯科塞斯 （4部）：进入IMDBtop100或豆瓣电影top100的电影  出租车司机  好家伙   禁闭岛  无间道风云',
            ]
          },
          {
            title:'带你进入不正常的世界',
            name:'DK奔小驰',
            like:'65163',
            referral:[
              '悬疑！ 惊悚！ 罪案 冒险 科考 实验 细菌病毒... 鬼怪 丧尸 疾病 心理 灵异！ 邪术 变态 离奇故事 人格分裂 精神分裂 心理障碍 …意外结局！…恐怖气氛… 非人类 凶猛生物 无人生还的旅行 离奇死亡 时空错乱 超能力 预言 穿越 超自然 世界末日，畸形社会，人类末日之战 打不死的英雄世界，再稍微来一点点魔幻~ 奇幻……（个人添加，难免不全。）',
              '..............带你进入不正常的世界 哈哈!【个人收藏，如有剧透，敬请见谅。】',
            ]
          },
          {
            title:'用电【影】来祭奠逝去的岁月',
            name:'火龙果不耐受者',
            like:'24145',
            referral:[
              '所有难忘的！',
            ]
          },
          {
            title:'女孩们的故事【电影】',
            name:'惟解漫天作雪飞',
            like:'16445',
            referral:[
              '或真实、或梦幻；或甜蜜、或痛苦；但都是女孩们的事儿。',
              '（排名不分先后，顺序按国别为日本、欧美、泰国、国产及港台、韩国）只收5分以上的片子【这个标准够低了】',
              '   ☆为个人推荐',
              '【女孩的概念比较宽泛吧~未婚就还是女孩？】',
              '【只收录电影和动画电影。不收录电视剧和长篇动画。有电影续集的也不予收录。】',
              '☆★如有推荐影片请留言！谢谢！★☆',
              '☆★谢谢关注★☆',

            ]
          },
          {
            title:'科幻是未来的钥匙。【科幻题材佳作·收藏必备】',
            name:'熊孩子',
            like:'21859',
            referral:[
              '科幻启示录，收集豆瓣上的高分较热门科幻电影',
              '关键字：机械、科幻、太空、时空、人工智能、基因、理论等',
              '备注（评语）为电影短评摘录（就是非我原创的），谢谢那些让我摘录的人儿。 ',
              '【注：非常推荐以右下角“推荐”下面的“按编辑顺序观看“该豆列】  ',
              'PS：转载我很荣幸，不过请注明出处和在下。 ',
              '不定时更新， ',
              '建议收藏方便及时更新观看。 ',

            ]
          },
          {
            title:'美国生活面面观',
            name:'Griet',
            like:'18125',
            referral:[
              '最真实的美国平凡人的日常生活。',
              '让你从不同层面了解这个一国家。',
            ]
          },
          {
            title:'2015终极期待',
            name:'影志',
            like:'3401',
            referral:[
            ]
          },
          {
            title:'经典韩国电影——收集100部',
            name:'大象吃泡面',
            like:'17338',
            referral:[
              '韩国电影系列，不可不看的韩国电影。',
              '导演：金基德、奉俊昊、朴赞郁、金知云、林权泽、郭在容、李沧东',
              '男：宋康昊、崔岷植、车太贤、安圣基、张东健、孔侑',
              '女：全度妍、全智贤、宋慧乔、孙艺珍、河智苑、文根英、林秀晶、金荷娜、宋允儿',
              '欢迎大家补充说明。',
            ]
          },
        ],
      }
    },
    methods:{
      sen(x){
          this.$router.push({
            path:"/mai",
            query:{
                res:x
            }
          })
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
