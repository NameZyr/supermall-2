<template>
  <NavBar class="detail-nav">
      <div @click="back" class="back" slot="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <span class="title-item" @click="titleClick(index)" :class="{active: currentIndex === index}" v-for="(item,index) in titles">{{item}}</span>
      </div>
    </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name:'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评价','推荐'],
      currentIndex:0
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  },
}
</script>

<style>

.back {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  width: 100%;
  display: flex;
}

.title-item {
  flex: 1;
  font-size: 13px;
}

.active {
  color: #ec9d9c;
}
</style>