import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import router from './routes.js'
import routerPlug from '@/pluguns/router.js'
import axios from '@/pluguns/axios.js'

Vue.config.productionTip = false

new Vue({
    store,
    routerPlug,
    router,
    axios,
    render: h => h(App),
}).$mount('#app')
