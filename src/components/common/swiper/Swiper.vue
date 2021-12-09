<template>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#ec9d9c">
      <slot></slot>
    </van-swipe>
</template>

<script>

export default {
  name: 'Swiper',
}
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    
    text-align: center;
    background-color: #39a9ed;
  }

  .my-swipe .van-swipe-item a img {
    width: 100%;
    display: block;
  }

  .van-swipe__indicator {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 100%;
    opacity: 1;
    -webkit-transition: opacity .2s,background-color .2s;
    transition: opacity .2s,background-color .2s;
  }
</style>