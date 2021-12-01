<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </NavBar>
    <!-- <HomeSwiper :banners="banners"></HomeSwiper> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import {getHomeMultidata} from "network/home"
export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
.home-nav {
  background-color: #feb0bd;
}
</style>