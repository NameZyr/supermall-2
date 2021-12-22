<template>
  <div class="bootom-bar">
    <div class="bar-left">
      <div class="bar-item">
        <i class="icon service"></i>
        <div class="bar-tet">
          服务
        </div>
      </div>
      <div class="bar-item">
        <i class="icon shop"></i>
        <div class="bar-tet">
          服务
        </div>
      </div>
      <div class="bar-item">
        <i class="icon collection"></i>
        <div class="bar-tet">
          服务
        </div>
      </div>
    </div>
    <div class="bar-right">
      <div class="car" @click="addToCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addCart')
    }
  },
}
</script>

<style>
.bootom-bar {
  position: relative;
  height: 49px;
  background-color: #fff;
  text-align: center;
  font-size: 12px;
  border-top: 1px solid #eee;
  display: flex;
}

.bar-left,.bar-right {
  flex: 1;
  display: flex;
  align-items: center;
}

.bar-item,.bar-right div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 22px;
  height: 20px;
  display: block;
  margin-bottom: 5px;
  background-size: 22px 150px;
  background-image: url('../../../assets/img/detail/detail_bottom.png');
}

.service {
  background-position: -0px -203px;
}

.shop {

  background-position: -0px -249px;
}

.collection {
  background-position: -0px -150px;
}

.bar-right div {
  height: 100%;
  line-height: 49px;
  font-size: 15px;
}

.car {
  background-color: rgb(250, 228, 28);
}

.purchase {
  background-color: #ec9d9c;
  color: #fff;
}
</style>