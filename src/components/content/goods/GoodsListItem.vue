<template>
  <div class="goods-item">
    <img :src="item.show.img" alt="">
    <p class="title">{{item.title}}</p>
    <div class="price">{{item.price}}</div>
    <span> <img src="~assets/img/common/collect.svg" alt="">{{item.cfav}}</span>
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
  }
}
</script>

<style scoped>
.goods-item {
  width: 48%;
  margin: 6px 0 3px;
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
  border-radius: 5px;
}
</style>