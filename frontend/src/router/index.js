import Vue from 'vue'
import Router from 'vue-router'
const ExpenseSubmissions = () => import('@/components/ExpenseSubmissions')
const ExpenseSubmission = () => import('@/components/ExpenseSubmission')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExpenseSubmissions',
      component: ExpenseSubmissions
    },
    {
      path: '/ExpenseSubmission',
      component: ExpenseSubmission
    }
  ]
})
