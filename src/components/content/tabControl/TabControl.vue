<template>
  <div class="tab-control">
    <div @click="itemClick(index)" class="tab-control-item" :class="{active:currentIndex === index}" v-for="(item,index) in titles">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type:Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control .tab-control-item {
  flex: 1;
}

.active {
  color: #ec9d9c;
}

.active span {
  padding: 5px;
  border-bottom: 3px solid #ec9d9c;
}
</style>