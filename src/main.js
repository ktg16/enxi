import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import'./assets/style/base.scss'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import BaiduMap from 'vue-baidu-map'
Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(BaiduMap,{
  ak:'K612hXGvN1GhVCI79VZzHdsvGeLFerbh'
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
