import Vue from 'vue'
import Router from 'vue-router'
import ExpenseSubmissions from '@/components/ExpenseSubmissions'
import ExpenseSubmission from '@/components/ExpenseSubmission'

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
