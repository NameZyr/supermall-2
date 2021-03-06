import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}


export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class GoodsParam {
  constructor(itemParams) {
    this.info = itemParams.info
    this.rule = itemParams.rule
    this.image = itemParams.info.image ? itemParams.info.image[0] : "";
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.fans = shopInfo.cFans
    this.goods = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
    this.name = shopInfo.name
    this.categories = shopInfo.categories
  }
}

