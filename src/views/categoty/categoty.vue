<template>
  <div>
    <NavBar>
      <template v-slot:center>
        <div>
          分类
        </div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'categoty',
  components: {
    NavBar
  }
}
</script>

<style>

</style>