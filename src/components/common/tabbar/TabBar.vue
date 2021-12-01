<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style>
   #tab-bar {
    width: 100%;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    display: flex;
    background-color: #f6f6f6;
  }
</style>