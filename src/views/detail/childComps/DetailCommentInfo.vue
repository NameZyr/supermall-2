<template>
  <div v-if="Object.keys(commentInfo) != 0" class="detail-comment">
    <div class="info-header">
      <div class="header-title">
        用户评价
      </div>
      <div class="header-more">
        更多
      </div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs" v-if="commentInfo.images">
        <img :src="item" v-for="(item, index) in commentInfo.images" alt="" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      //1将时间戳转成Date对象
      const date = new Date(value * 1000)

      //2将date进行格式化
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.detail-comment {
  padding: 0px 5px;
  margin-top: 15px;
  border-top: 3px solid #eee;
}

.info-header {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.info-user {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.info-user img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 6px;
}

.info-detail {
  padding: 15px 0;
}

.info-other {
  margin-top: 10px;
}

.info-other .date {
  margin-right: 5px;
}

.info-imgs {
  display: flex;
}

.info-imgs img {
  width: 80px;
  margin-right: 5px;
}
</style>