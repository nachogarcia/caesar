import Vue from 'vue'
import Vuex from 'vuex'
import getActivities from '@/APICallers/ActivityCaller'
import getUsers from '@/APICallers/UserCaller'
import getExpenseSubmissions from '@/APICallers/ExpenseSubmissionCaller'
import User from '@/domain/User'
import Expense from '@/domain/Expense'
import ExpenseSubmission from '@/domain/ExpenseSubmission'
import Activity from '@/domain/Activity'

Vue.use(Vuex)

const state = {
  expenseSubmissions: [],
  expenseSubmission: {},
  activities: [],
  users: []
}

const mutations = {
  expenseSubmissions (state, expenseSubmissions) {
    state.expenseSubmissions = expenseSubmissions
  },
  expenseSubmission (state, expenseSubmission) {
    state.expenseSubmission = expenseSubmission
  },
  users (state, users) {
    state.users = users
  },
  activities (state, activities) {
    state.activities = activities
  },
  currentUser (state, currentUser) {
    state.currentUser = currentUser
  },
}

const actions = {
  async updateUsers ({ commit }) {
    const users = await getUsers()
    commit('users',
      users.map(data =>
        new User(
          data.id,
          data.name,
          data.role,
          data.active
        )
      )
    )
  },

  async updateActivities ({ commit }) {
    const activities = await getActivities()
    commit('activities',
      activities.map(data =>
        new Activity(
          data.id,
          data.name,
          data.description,
          data.activitytype,
          data.is_billable
        )
      )
    )
  },

  async updateExpenseSubmissions ({ commit, getters }) {
    const expenseSubmissions = await getExpenseSubmissions()
    commit('expenseSubmissions',
      expenseSubmissions.map(data =>
        new ExpenseSubmission(
          data.id,
          getters.user(data.user_id),
          data.date,
          data.concept,
          data.state,
          data.expenses.map(expense =>
            new Expense(
              getters.activity(expense.activity_id),
              expense.date,
              expense.concept,
              expense.amount,
              expense.modified
            )
          )
        )
      )
    )
  },

  async currentUser ({ commit, getters }) {
    commit('currentUser', getters.users()[0] )
  },
}

const getters = {
  expenseSubmissions: state => state.expenseSubmissions,
  expenseSubmission: state => state.expenseSubmission,
  activity: state => id => state.activities.find(element => element.id === id),
  activities: state => state.activities,
  user: state => id => state.users.find(element => element.id === id),
  currentUser: state => state.currentUser,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
