<template>
  <Swiper>
    <SwiperItem v-for="item in image">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
  data() {
    return {
      image:[
        {id:1, link:'https://www.bilibili.com/read/mobile?id=13260453&from=search&spm_id_from=333.337.0.0', image:'https://i0.hdslb.com/bfs/article/b22dc927674bf26f64bb5e0e4614874a7f613a08.png@686w_380h_progressive.webp'},
        {id:1, link:'https://www.bilibili.com/read/mobile?id=13260453&from=search&spm_id_from=333.337.0.0', image:'https://i0.hdslb.com/bfs/article/8f67fdc1ef4c1de320e1a59231cecb175f521cda.png@686w_380h_progressive.webp'},
        {id:1, link:'https://www.bilibili.com/read/mobile?id=13260453&from=search&spm_id_from=333.337.0.0', image:'https://i0.hdslb.com/bfs/article/6c526b129e77fcffda923f17740f6373ff7f3b07.png@686w_380h_progressive.webp'},
        {id:1, link:'https://www.bilibili.com/read/mobile?id=13260453&from=search&spm_id_from=333.337.0.0', image:'https://i0.hdslb.com/bfs/article/a251ee38827bf1090be7abf758e616fa8e343ead.png@686w_380h_progressive.webp'},
        {id:1, link:'https://www.bilibili.com/read/mobile?id=13260453&from=search&spm_id_from=333.337.0.0', image:'https://i0.hdslb.com/bfs/article/542e72d60a03170a1b9d1b8934f1ed1c00d72559.png@686w_380h_progressive.webp'},
      ]
    }
  },
}
</script>

<style>

</style>