import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  setTimeout((res) => {
    if (to.meta.redirectedFrom) {
      if (store.state.user.account != "") {
        next();
      } else {
        next({
          path: '/load'
        })
      }
    } else {
      next();
    }
  }, 100)
})
