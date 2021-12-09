<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <HomeSwiper :banners="banners"/>
    <RecommendView :recommends="recommends"/>
    <Feature/>
    <TabControl @tabClick="tabClick" class="tab-control" :getHomeGoods="getHomeGoods" :titles="['流行','新款','精选']"/>
    <GoodsList :goods="showGoods"/>
    <!-- <back-top @click.native="backClick" v-show="isShowBackTop"/> -->
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from "./childComps/RecommendView.vue"
import Feature from "./childComps/FeatureView.vue"

import TabControl from "components/content/tabControl/TabControl"
import GoodsList from 'components/content/goods/GoodsList'
// import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods} from "network/home"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    // BackTop,
  },
  data() {
  return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list:[
          {title:"嘉然我的嘉然🤤🤤", show:{img:"https://i0.hdslb.com/bfs/article/d24e12d5c8a5089c3c5bfc58ef079e9e69280c8a.jpg@942w_2034h_progressive.webp"},cfav:1000},
          {title:"我要做嘉然小姐的狗🤤🤤", show:{img:"https://i0.hdslb.com/bfs/article/8e589338df41c691c0ae4a1c09bb363df20cd9c3.png@942w_1334h_progressive.webp"},cfav:3000},
        ]},
        'new': {page: 0, list:[]},
        'sell': {page: 0, list:[]},
      },
      currentType: 'pop',
      // isShowBackTop: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    // this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
  },

  mounted() {
    // this.$bus.$on('itemImageLoad', () => {
    //   this.$refs.scroll.refresh()
    // })
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
    },

    // backClick() {
    //   this.$refs.scroll.scrollTo(0,0)
    // },

    // contentScroll(position) {
    //   this.isShowBackTop = (-position.y) > 1000
    // },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // getHomeGoods(type) {
    //   const page = this.goods[type].page + 1
    //   getHomeGoods(type,page).then(res => {
    //     this.goods[type].list.push(...res.data.list)
    //     this.goods[type].page+=1
    //   })
    // }
  },
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
    /* height: 100vh; */
    position: relative;
  }

  .home-nav {
    background-color: #ec9d9c;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    position: absolute;
  }

  /* .content {
    height: calc(100% - 44px);
    margin-top: 44px;
  } */
</style>