<template>
  <div v-if="Object.keys(goodsParam) != 0" class="detail-param">
    <div class="size-info">
      <div class="size-item" v-for="items in goodsParam.rule.tables">
        <div class="size-item-tr" v-for="tr in items">
          <span class="size-item-td" v-for="td in tr">{{td}}</span>
        </div>
      </div>

      <!-- <table class="size-item"  v-for="items in goodsParam.rule.tables">
        <tr v-for="tr in items">
          <td v-for="td in tr">{{td}}</td>
        </tr>
      </table> -->

      <div class="product-info">
        <div class="product-item" v-for="item in goodsParam.info.set">
          <div>
            <span class="product-item-key">{{item.key}}</span>
            <span class="product-item-value">{{item.value}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailParamInfo",
  props: {
    goodsParam: {
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.detail-param {
  padding: 20px 5px 0;
}

.size-item .size-item-tr {
  border-bottom: solid 1px #eee;
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.size-item .size-item-tr .size-item-td {
  flex: 1;
}

.product-item {
 width: 100%;
 display: flex;
}

.product-item div {
 flex: 1;
 border-bottom: solid 1px #eee;
 padding: 10px 0;
}

.product-item div {
  display: flex;
  align-items: center;
}

.product-item-key {
  width: 30%;
}

.product-item-value {
  width: 70%;
  color: #ec9d9c;
}
</style>