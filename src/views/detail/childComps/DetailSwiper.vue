<template>
  <Swiper  class="detail-swiper">
    <SwiperItem v-for="item in topImages">
      <a href="">
        <img :src="item" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>

import {Swiper, SwiperItem} from "components/common/swiper"
export default {
  name:'DetailSwiper',
  props: {
    topImages: {
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
  methods: {
    
  },
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>