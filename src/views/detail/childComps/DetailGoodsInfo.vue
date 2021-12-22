<template>
  <div v-if="Object.keys(detailInfo) != 0" class="detail-goods">
    <div class="goods-desc">
      <div class="start"></div>
      <div class="goods-desc-text">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>

    <div v-for="item in detailInfo.detailImage">
      <div class="goods-key">{{item.key}}</div>
      <div class="goods-list">
        <img v-for="(item, index) in item.list" :key="index" :src="item" alt="" @load="imageLoad">
      </div>
    </div>
    <!-- <h4 class="goods-key">{{detailInfo.detailImage[0].key}}</h4>
    <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" @load="imageLoad"> -->
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      currentIndex:0,
      imagesLength:0
    }
  },
  methods: {
    imageLoad() {
      // 判断，所有的图片都加载完了，那么进行一次回调就可以了
      // if(++this.currentIndex === this.imagesLength) {
      //   this.$emit("imageLoad")
      // }
      this.$emit("imageLoad")
    }
  },
  watch: {
    detailInfo() {
      // 获取图片的个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.detail-goods {
  padding: 20px 5px 0;
  font-size: 14px;
  border-bottom: 3px solid #eee;
}

.goods-desc {
  position: relative;
  padding: 15px 0;
}

.goods-desc-text {
  margin: 15px 0;
}

.goods-desc .start,
.goods-desc .end {
  width: 60px;
  height: 1px;
  background-color: black;
  position: relative;
}

.goods-desc .start::before,
.goods-desc .end::after {
  content: '';
  width: 5px;
  height: 5px;
  background-color: black;
  position: absolute;
  bottom: 0;
}

.goods-desc .end::after {
  right: 0;
}

.goods-desc .start {
  float: left;
}

.goods-desc .end {
  float: right;
}

.detail-goods .goods-list img {
  width: 100%;
}
</style>