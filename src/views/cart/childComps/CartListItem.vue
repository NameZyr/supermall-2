<template>
  <div class="shop-item">
    <div class="item-left">
      <div class="item-selector">
        <CheckButton :isChecked="product.checked" @click.native="checkClick()"></CheckButton>
      </div>
      <img :src="product.image" alt="">
    </div>
    <div class="item-right">
      <p class="item-title">{{product.title}}</p>
      <p class="item-desc">{{product.desc}}</p>
      <div class="item-bottom">
        <div class="item-price">
          ￥{{product.price}}
        </div>
        <div class="item-count">
          X{{product.count}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

export default {
  name: "CartListItem",
  props: {
    product: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  },
}
</script>

<style scoped>
.shop-item {
  width: 100%;
  display: flex;
  padding: 8px 5px;
  border-bottom: 2px solid #eee;
}

.shop-item img {
  width: 65px;
  height: 80px;
  border-radius: 3px;
  margin-left: 4px;
}

.item-left {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.item-right {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.item-right p {
    overflow: hidden;
    text-overflow: ellipsis;
    -ms-text-overflow: ellipsis;
    display: box;
    display: -webkit-box;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.item-title {

}

.item-desc {
  font-size: 14px;
  color: #ccc;
}

.item-bottom {
  display: flex;
  justify-content: space-between;
}

.item-price {
  color: orange;
}
</style>