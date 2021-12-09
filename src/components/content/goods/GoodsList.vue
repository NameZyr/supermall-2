<template>
  <div class="goods">
    <GoodsListItem :goodsItem="item" v-for="item in goods"/>
  </div> 
</template>

<script>
import GoodsListItem from '../../../../../../vue/supermall/src/components/content/goods/GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
}


</style>