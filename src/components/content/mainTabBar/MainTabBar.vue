<template>
   <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/1.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/1active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/categoty">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/2.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/2active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>  

      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/3.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/3active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item> 
      
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/4.png" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/tabbar/4active.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item> 
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'mainTabBar',
  components: {
    TabBar, 
    TabBarItem
  },
}
</script>

<style>

</style>