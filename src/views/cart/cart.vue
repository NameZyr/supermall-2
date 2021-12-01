<template>
  <div>
    <NavBar>
      <template v-slot:center>
        <div>
          购物车(0)
        </div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'cart',
  components: {
    NavBar
  }
}
</script>

<style>

</style>