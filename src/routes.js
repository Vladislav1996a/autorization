
import VueRouter from 'vue-router'
import login from './components/login.vue'
import main from './components/main.vue'
import emptyLayout from '@/layout/emptyLayout.vue'
import mainLayout from './layout/mainLayout.vue'

const routes = [
    {
        path: '/',
        component: mainLayout,
        children:[
            {
                path:'/',
                component: main,
                name: "home-page",
            }
        ]
    },
    {
        path:'/',
        component: emptyLayout,
        name: "empty-layout",
        children:[
            {
                path:'/login',
                component: login,
                name: "login-page",
            }
        ]
       
    }
]

const router = new VueRouter({routes, mode: 'history'})
router.beforeEach((to, from, next) => {
    let isAuthenticated = localStorage.getItem('data')
    if (to.name !== 'login-page' && !isAuthenticated) next({ name: 'login-page' })
    else next()
  })

export default router