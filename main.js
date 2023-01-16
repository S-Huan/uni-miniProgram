import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
//这里是封装请求， 给uni全局对象写入$http请求插件
import { $http } from '@escook/request-miniprogram'
$http.baseUrl = 'https://api-hmugo-web.itheima.net/'
uni.$http = $http

//这里是封装弹窗， 封装一下原生的uni.showToast
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon:'none'
  })
}
const app = new Vue({
    ...App
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