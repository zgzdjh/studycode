import Vue from 'vue'
import echartsView from './test-echarts/echartsView.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(echartsView),
}).$mount('#app')
