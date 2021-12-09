<template>
  <div class="recommend">
    <div v-for="item in image" class="recommend-item">
      <a :href="item.link">
        <img referrer="no-referrer" :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      image:[
        {id:1, link:'https://space.bilibili.com/672328094?from=search&seid=5977593556573131557&spm_id_from=333.337.0.0', title:'然然今天吃什么？', image:'https://i0.hdslb.com/bfs/article/071c49077161d3d613c64b3d9c63e940995c8d88.jpg@942w_1149h_progressive.webp'},
        {id:2, link:'https://www.bilibili.com/video/BV1Th411y7XE?from=search&seid=262805027891451123&spm_id_from=333.337.0.0', title:'嘉然的狗', image:'https://i0.hdslb.com/bfs/article/40608ab535fa8d3cc670ce51da8eaa07d8f2ac6a.png@777w_777h_progressive.webp'},
        {id:3, link:'https://www.bilibili.com/video/BV1Th411y7XE?from=search&seid=262805027891451123&spm_id_from=333.337.0.0', title:'嘉然的猫', image:'https://i0.hdslb.com/bfs/article/3afd4252d73a7937f940e34c5b4dcb81cd61ee8d.jpg@768w_768h_progressive.webp'},
        {id:4, link:'https://www.bilibili.com/video/BV1864y197od?from=search&seid=6522378637062267790&spm_id_from=333.337.0.0', title:'嘉然为什么是神？', image:'https://i0.hdslb.com/bfs/article/f02e87879742f297e3f5eeae0a7af6eb5c5d3a79.jpg@942w_896h_progressive.webp'},
      ]
    }
  },
}
</script>

<style>
.recommend {
  display: flex;
  justify-content: space-around;
  padding: 10px 0px 20px;
  text-align: center;
  font-size: 12px;
  border-bottom: 6px solid #eee;
  align-items: center;
}

.recommend-item a img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>