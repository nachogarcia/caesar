import Vue from 'vue'
import Vuex from 'vuex'
import getActivities from '@/APICallers/ActivityCaller'
import getUsers from '@/APICallers/UserCaller'
import getExpenseSubmissions from '@/APICallers/ExpenseSubmissionCaller'

Vue.use(Vuex)

const state = {
  expenseSubmissions: [],
  expenseSubmission: {},
  activities: [],
  users: [],
  loading: 0
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
  busy (state) {
    state.loading++
  },
  free (state) {
    state.loading--
  }
}

export const actions = {
  async updateUsers ({ commit }) {
    commit('busy')
    const users = await getUsers()
    commit('users', users)
    commit('currentUser', getters.users[0])
    commit('free')
  },

  async updateActivities ({ commit }) {
    commit('busy')
    const activities = await getActivities()
    commit('activities', activities)
    commit('free')
  },

  async updateExpenseSubmissions ({ commit, getters }) {
    commit('busy')
    const expenseSubmissions = await getExpenseSubmissions(getters.user, getters.activity)
    commit('expenseSubmissions', expenseSubmissions)
    commit('free')
  }
}

const getters = {
  expenseSubmissions: state => state.expenseSubmissions,
  expenseSubmission: state => state.expenseSubmission,
  activity: state => id => state.activities.find(element => element.id === id),
  activities: state => state.activities,
  users: state => state.users,
  user: state => id => state.users.find(element => element.id === id),
  currentUser: state => state.currentUser,
  loading: state => state.loading
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
