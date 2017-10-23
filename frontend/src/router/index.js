import Vue from 'vue'
import Router from 'vue-router'
const Expenses = () => import('@/components/Expenses')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Expenses',
      component: Expenses
    },
  ]
})
