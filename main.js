import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from '@/store/index.js'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

import {myRequest} from './util/api.js'
Vue.prototype.$myRequest=myRequest


// main.js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

