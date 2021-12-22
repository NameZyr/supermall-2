<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type:Boolean,
      default: false
    }
  }
}
</script>

<style>
.check-button {
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check {
  background-color: #ec9d9c;
  border: 2px solid #ec9d9c;
}

</style>