<template>
  <div class="goods">
    <GoodsListItem :goodsItem="item" v-for="item in goods"/>
  </div> 
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
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
  overflow: scroll;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  font-size: 14px; 
   /* -moz-column-count:2; 
     -webkit-column-count:2; 
    column-count:2;
    -moz-column-gap: 10px;
    -webkit-column-gap: 10px;
    column-gap: 10px;
　　display:inline-block; */
}


</style>