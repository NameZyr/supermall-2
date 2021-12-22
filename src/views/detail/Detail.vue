<template>
  <div id="detail">
    <DetailNavBar ref="nav" class="detail-nav" @titleClick="titleClick" />
    <Scroll :probeType="3" ref="scroll" class="content" @scroll="contentScroll">
      <DetailSwiper :topImages="topImages" @imageLoad="imageLoad"/>
      <DetailBaseInfo :goods="goods"/>
      <DetailShopInfo :shops="shops"/>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <DetailParamInfo ref="params" :goodsParam="goodsParam"/>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
      <GoodsList ref="recommend" :goods="recommends"/>
    </Scroll>
    <DetailBottomBar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import DetailNavBar from "./childComps/DetailNavBar.vue"
import DetailSwiper from "./childComps/DetailSwiper.vue"
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue"
import DetailParamInfo from "./childComps/DetailParamInfo.vue"
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue"
import DetailBottomBar from "./childComps/DetailBottomBar.vue"

import GoodsList from 'components/content/goods/GoodsList'


import Scroll from "components/common/scroll/Scroll"

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail"
import {debounce} from "common/utils"
import {itemListenerMixin,backTopMixin} from "common/mixin"

import {mapActions} from "vuex"

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
  },
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages:[],
      goods: {},
      shops: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommends: [],
      themeTopYs:[],
      getThemeTopY: null,
      currentIndex:0,
      message: '',
      show: false
    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid

    //2.根据iid请求详情数据
    this.getDetail()

    //3.请求推荐数据
    this.getRecommend()

    //4.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE)
      console.log(this.themeTopYs);
    }, 500)
  },
  destroyed() {
    this.$bus.$off('itemImageLoad',this.ItemImgListener)
  },
  mounted() {
    
  },
  updated() {
 
  },
  methods: {
    ...mapActions(['addCart']),
    getDetail() {
      getDetail(this.iid).then(res => {
        //1.获取顶部的图片轮播数据
        const data = res.result

        //2.保存轮播图的数据
        this.topImages = data.itemInfo.topImages;
        console.log(res);
        //3.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //4.获取商家信息
        this.shops = new Shop(data.shopInfo)

        //5.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        //6保存商品参数
        this.goodsParam = new GoodsParam(data.itemParams)

        //7取出评论的信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

        this.$nextTick(() => {
          
        })
      })
    },

    getRecommend() {
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },

    imageLoad() {
      this.refresh()
      this.getThemeTopY()
    },

    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },

    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
      //1.获取y值
      const positionY = -position.y

      let length = this.themeTopYs.length

      for(let i = 0; i < length-1; i++) {
        // if(this.currentIndex !== i && ((i < length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length -1 && positionY >= this.themeTopYs[i]))) {
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }

        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },

    addToCart() {
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.price = this.goods.realPrice
      product.desc = this.goods.desc
      product.iid = this.iid
      console.log(product);

      //2.将商品添加到购物车
      // this.$store.commit('addCart', product)
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res);
      // })

      this.addCart(product).then(res => {
        // this.message = res
        // this.show = true

        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // },1500)
        this.$toast.show(res, 1500)
      })
    }
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.detail-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}

.content {
  height: calc(100% - 93px);
}
</style>