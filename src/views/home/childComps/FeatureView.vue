<template>
  <div class="feature">
    <a href="https://www.bilibili.com/read/cv13260453?from=search&spm_id_from=333.337.0.0">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imageLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  },
}
</script>

<style>
.feature img {
  width: 100%;
}
</style>