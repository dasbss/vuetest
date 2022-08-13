import Vue from 'vue'
import App from './App.vue'
import route from './route.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
/* import vuex from './vuex' */

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router:route,
 /* store:vuex, */
  render: h => h(App),
}).$mount('#app')
