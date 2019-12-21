import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const index = r => require.ensure([], () => r(require('@/view/index')), 'index');

const router = new VueRouter({
    routes: [
      { path: '/', component: index,
        children: []
      }
    ]
  })
  export default router;