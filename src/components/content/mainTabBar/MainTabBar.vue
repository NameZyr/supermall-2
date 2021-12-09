<template>
  <tab-bar class="tab-bar">
      <tab-bar-item path="/home" activeColor="deepPink">
         <img slot="item-icon" src="~assets/img/tabbar/1.png" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/1active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/2.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/2active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/3.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/3active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deepPink">
        <img slot="item-icon" src="~assets/img/tabbar/4.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/4active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  .tab-bar {
    z-index: 999;
  }
</style>