<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <!-- <li v-for="item in cartList">
        {{item}}
      </li> -->
     <CartListItem v-for="(item,index) in cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script>

import Scroll from "components/common/scroll/Scroll"
import CartListItem from './CartListItem.vue'

import {mapGetters} from "vuex"

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    console.log('00');
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 133px);  
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>