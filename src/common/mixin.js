import {debounce} from "common/utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  mounted() {
    //1.图片加载完成的事件监听
    //this.$refs.scroll.refresh对这个函数进行防抖操作
    this.refresh = debounce(this.$refs.scroll.refresh,500)
     //对监听的事件进行保存
    this.ItemImgListener = () => {
      this.refresh()
    }
    this.$bus.$on('itemImageLoad',this.ItemImgListener)
  },

  data() {
    return {
      ItemImgListener: null,
      refresh: null,
    }
  },
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0, 500)
    }
  },
}