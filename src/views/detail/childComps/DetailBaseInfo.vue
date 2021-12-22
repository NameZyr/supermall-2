<template>
  <div v-if="Object.keys(goods) != 0" class="detail-info">
    <div class="title">
      <h3>{{goods.title}}</h3>
    </div>
    <div class="info-price">
      <div class="n-price">
        <h2>{{goods.newPrice}}</h2>
      </div>
      <div v-if="goods.oldPrice" class="o-price">
        <del>{{goods.oldPrice}}</del>
      </div>
      <div v-if="goods.discount" class="discount">
        {{goods.discount}}
      </div>
    </div>
    <div class="info-other">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="info-services">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {

  },
}
</script>

<style scoped>
.detail-info {
  padding: 15px 5px 0;
  border-bottom: 3px solid #eee;
}

.title {
  margin-bottom: 10px;
}

.info-price {
  display: flex;
}

.n-price {
  color: #ec9d9c;
  margin-right: 5px;
}

.o-price {
  position: relative;
  font-size: 14px;
  color: #ccc;
}

.o-price del {
  position: absolute;
  bottom: 0;
}

.discount {
  padding: 0 3px;
  height: 20px;
  line-height: 20px;
  margin-left: 60px;
  background-color: #ec9d9c;
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
}

.info-other {
  font-size: 14px;
  color: #ccc;
  padding: 20px 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.info-services {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  flex-wrap: wrap;
}

.info-service-item img {
  width: 15px;
}

</style>