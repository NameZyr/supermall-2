<template>
  <div class="detail-shop-info">
    <div class="shop-logo">
      <img :src="shops.logo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="shop-info">
      <div class="shop-sells">
        <div>{{shops.sells}}</div>
        <div>总销量</div>
      </div>
      <div class="shop-goods">
        <div>{{shops.goods}}</div>
        <div>全部宝贝</div>
      </div>
      <span></span>
      <div class="shop-score">
        <div v-for="item in shops.score">
          {{item.name}} 
          <span :class="{bg:item.isBetter}" class="score">{{item.score}}</span>
          <span class="high" v-if="item.isBetter">高</span>
          <span class="low" v-else>低</span>
        </div>
      </div>
    </div>
    <div class="shop-url">
      <a :href="shops.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shops: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  created() {
    console.log(this.shops);
  },
}
</script>

<style scoped>
.detail-shop-info {
  padding: 20px 5px;
  text-decoration: none;
  border-bottom: solid 3px #eee;
}

.shop-logo {
  display: flex;
  align-items: center;
}

.shop-logo img {
  width: 40px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 5px;
}

.shop-info {
  padding: 20px 0 10px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}

.shop-sells,
.shop-goods {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.shop-info > span {
  margin-top: 10px;
  height: 50px;
  width: 1px;
  background-color: #ccc;
}

.shop-score div {
  margin-bottom: 10px;
  
}

.shop-score .score{
  color: rgba(76, 240, 35, 0.904);
}

.shop-score .bg {
  color: rgba(253, 70, 14, 0.966);
}

.high {
  background-color: rgba(253, 70, 14, 0.966);
}

.low {
  background-color: rgba(76, 240, 35, 0.904);
}

.high,
.low {
  color: #fff;
  float: right;
  margin-left: 5px;
}

.shop-url {
  display: flex;
  justify-content: center;
}

.shop-url a {
  border: none;
  width: 120px;
  line-height: 30px;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
  background-color: #eee;
}
</style>