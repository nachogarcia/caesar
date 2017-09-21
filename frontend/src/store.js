import Vue from 'vue'
import Vuex from 'vuex'
import getActivities from '@/APICalls/Activity'
import getUsers from '@/APICalls/User'
import getExpenseSubmissions from '@/APICalls/ExpenseSubmission'

Vue.use(Vuex)

const state = {
  expenseSubmissions: [],
  expense: {},
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
  }
}

const actions = {
  async updateUsers ({ commit, state }) {
    const users = await getUsers()
    commit('users', users)
  },

  async updateActivities ({ commit, state }) {
    const activities = await getActivities()
    commit('activities', activities)
  },

  async updateExpenseSubmissions ({ commit, state }) {
    const expenseSubmissions = await getExpenseSubmissions()
    commit('expenseSubmissions', expenseSubmissions)
  }
}

const getters = {
  expenseSubmissions: state => state.expenseSubmissions,
  expenseSubmission: state => state.expenseSubmission,
  activity: state => id => state.activities.find(element => element.id === id) | {},
  activities: state => state.activities,
  user: state => id => state.users.find(element => element.id === id)
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
