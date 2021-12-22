<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <TabControl 
      @tabClick="tabClick" 
      :titles="['然然','贝拉','Asoul']"
      ref="tabControl1"
      class="tabControl"
      v-show="isTabFixed"/>
    <Scroll 
    :probe-type="3" 
    :pullUpLoad="true" ref="scroll" 
    class="content" 
    @scroll="contentScroll"
    @pullingUp="loadMore"
    >
      <HomeSwiper @swiperImageLoad="swiperImageLoad" :banners="banners"/>
      <RecommendView  :recommends="recommends"/>
      <Feature @swiperImageLoad="swiperImageLoad"/>
      <TabControl 
      @tabClick="tabClick" 
      :titles="['然然','贝拉','Asoul']"
      ref="tabControl2"
      :class="{fixed: isTabFixed}"/>
      <GoodsList :goods="showGoods"/>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from "./childComps/RecommendView.vue"
import Feature from "./childComps/FeatureView.vue"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods} from "network/home"
import {itemListenerMixin,backTopMixin} from "common/mixin"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
  return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list:[
          // {title:"嘉然我的嘉然🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/d24e12d5c8a5089c3c5bfc58ef079e9e69280c8a.jpg@942w_2034h_progressive.webp"},cfav:1000},
          // {title:"你再想想？😠😠", price:99, show:{img:"https://i0.hdslb.com/bfs/article/4122e5c51271eb7d33bdeef131bd3dd4f72c2ba3.jpg@942w_1322h_progressive.webp"},cfav:900},
          // {title:"然然你带我走吧😭😭😭", price:99, show:{img:"https://i0.hdslb.com/bfs/article/6e2a6ef06ba3d1f38a26e4df07bb159dd042180c.jpg@942w_1334h_progressive.webp"},cfav:7000},
          // {title:"你们不许看不许看😭😭😭", price:99, show:{img:"https://i0.hdslb.com/bfs/article/71b0acf7c5921465a0e5829c73816009a8913532.jpg@942w_1676h_progressive.webp"},cfav:4000},
          // {title:"我要做嘉然小姐的狗🤤🤤", price:99, show:{img:"https://i0.hdslb.com/bfs/article/8e589338df41c691c0ae4a1c09bb363df20cd9c3.png@942w_1334h_progressive.webp"},cfav:3000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:99, show:{img:"https://i0.hdslb.com/bfs/article/32f4365aeb748283888157fcd51c01e29589848a.jpg@675w_1203h_progressive.webp"},cfav:8000},
        ]},
        'new': {page: 0, list:[
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:99, show:{img:"https://i0.hdslb.com/bfs/article/b062cbc9d43657a734ebfcfef61f92cb8223a300.png@942w_1193h_progressive.webp"},cfav:7000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:99, show:{img:"https://i0.hdslb.com/bfs/article/0f538e0b9e84819ca0b6dba3cd14b129835d5d18.jpg@942w_1311h_progressive.webp"},cfav:3000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:99, show:{img:"https://i0.hdslb.com/bfs/article/f68aa52141fa31aaf1239c2b182190724f3dd658.png@942w_1796h_progressive.webp"},cfav:4000},
          
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:99, show:{img:"https://i0.hdslb.com/bfs/article/952bab71e775211f86e4bbd78cb230bf565d9c16.jpg@777w_1098h_progressive.webp"},cfav:900},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:99, show:{img:"https://i0.hdslb.com/bfs/article/a357253eb94bf14384847a8a4d526660c9438d2e.jpg@942w_1335h_progressive.webp"},cfav:900},
          //  {title:"嘿嘿贝拉🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/dc9b1e5d0fdeb6a9107f1b26272fb91c8e3aca23.jpg@942w_1529h_progressive.webp"},cfav:1000},
           
        ]},
        'sell': {page: 0, list:[
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/ee32a72a200746bee2a4229742c0c0dd44ecfb00.png@942w_1356h_progressive.webp"},cfav:1000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/c7b3daacfbdbd99eda9d6e0eac4870bd5e001a26.jpg@942w_1605h_progressive.webp"},cfav:1000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/8e589338df41c691c0ae4a1c09bb363df20cd9c3.png@942w_1334h_progressive.webp"},cfav:1000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/b53474ed0703326706772b214bba65b94030ab2c.jpg@942w_1283h_progressive.webp"},cfav:1000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/5f3cb57702df6c10ec3b193ad073315c4ace8583.png@942w_1334h_progressive.webp"},cfav:1000},
          // {title:"🤤🤤🤤🤤🤤🤤🤤🤤", price:89, show:{img:"https://i0.hdslb.com/bfs/article/f6592724e0fb77bd5674729a5e47b66d451f67a4.jpg@942w_1334h_progressive.webp"},cfav:1000},
        ]},
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed:false,
      saveY:0,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY,0)
    this.$refs.scroll.refresh()
  },

  deactivated() {
    //1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()

    //2.取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.ItemImgListener)
  },
  mixins: [itemListenerMixin,backTopMixin],
  mounted() {
    //2.获取tabControl的offsetTop
    this.tabOffsetTop = this.$refs.tabControl
  },
  methods: {
    // 事件监听

    

    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },

    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        
        this.$refs.scroll.finishPullUp()
      })
    }
  },
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    padding-bottom: 49px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: #ec9d9c;
    color: #fff;
    z-index: 99;
  }

  .content {
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    position: absolute;
  }

  .tabControl {
    position: relative;
    z-index: 99;
  }


  /* .content {
    height: calc(100% - 44px);
    margin-top: 44px;
  } */
</style>