<template>
  <div>
     <NavBar>
      <template v-slot:center>
        <div>
          我的
        </div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'profile',
  components: {
    NavBar
  }
}
</script>

<style>

</style>