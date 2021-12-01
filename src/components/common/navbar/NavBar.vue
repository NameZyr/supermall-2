<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props:['title']
}
</script>

<style>
.nav-bar {
  width: 100%;
  line-height: 44px;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  color: white;
  text-align: center;
}

.left,.right {
  width: 60px;
  height: 44px;
}

.center {
  flex: 1;
  height: 44px;
}
</style>