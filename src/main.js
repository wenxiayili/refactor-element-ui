/*
 * @Author: liyunhua yunhuaheusnjing@live.com
 * @Date: 2024-01-18 08:55:05
 * @LastEditors: liyunhua yunhuaheusnjing@live.com
 * @LastEditTime: 2024-01-18 09:30:40
 * @FilePath: \element-test\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
