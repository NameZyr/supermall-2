<template>
  <div class="cart">
    <!-- 导航 -->
    <NavBar class="cart-nav">
      <div slot="center">
        购物车({{length}})
      </div>
    </NavBar>

    <!-- 商品的列表 -->
    <CartList/>

    <!-- 底部汇总 -->
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childComps/CartList.vue"
import CartBottomBar from "./childComps/CartBottomBar.vue"

import {mapGetters} from "vuex"

export default {
  name: "Cart",
  components: {
    NavBar,
    CartBottomBar,
    CartList
  },
  computed: {
    // ...mapGetters(['cartLength','cartList'])

    ...mapGetters({
      length: 'cartLength',
    })
  },
  mounted() {
    
  },
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .cart-nav {
    background-color: #ec9d9c;
    color: #fff;
    /* font-weight: 700; */
  }
</style>