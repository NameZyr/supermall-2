<template>
  <div class="goods-item" @click="itemClick()">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <p class="title">{{goodsItem.title}}</p>
    <div>
      <!-- <div class="price">{{goodsItem.price}}</div> -->
      <img src="~assets/img/common/collect.svg" alt="">
      <span class="Collection">{{goodsItem.cfav}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad () {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/detail' + this.goodsItem.iid)
    }
  },
}
</script>

<style scoped>
.goods-item {
  width: 48%;
  margin: 6px 0 3px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: 100%;
}

.goods-item p {
  display: -webkit-box;
  display: -moz-box;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:1;
  margin: 5px ;
}

.goods-item .price {
  color: #ec9d9c;
  display:inline-block
}

.goods-item img {
  display: block;
  width: 100%;
  
}

.goods-item div {
  display: flex;
  align-items: center;
  justify-content:center;
}



.goods-item div img{
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-left: 3px;
}
</style>