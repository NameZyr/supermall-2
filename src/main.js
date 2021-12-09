import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
