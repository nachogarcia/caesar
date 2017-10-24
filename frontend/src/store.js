import Vue from 'vue'
import Vuex from 'vuex'
import getActivities from '@/APICallers/ActivityCaller'
import getUsers from '@/APICallers/UserCaller'
import findImage from '@/APICallers/ImageCaller'
import getExpenses from '@/APICallers/ExpensesCaller'

Vue.use(Vuex)

export const state = {
  expenses: [],
  selectedExpense: {},
  activities: [],
  users: [],
  currentUser: {},
  loading: 0
}

export const mutations = {
  expenses (state, expenses) {
    state.expenses = expenses
  },
  selectedExpense (state, selectedExpense) {
    state.selectedExpense = selectedExpense
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
  async updateUsers ({ commit, getters }) {
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

  async updateExpenses ({ commit, getters }) {
    commit('busy')
    const expenses = await getExpenses(getters.user, getters.activity, findImage)
    commit('expenses', expenses)
    commit('free')
  }
}

export const getters = {
  expenses: state => state.expenses,
  selectedExpense: state => state.selectedExpense,
  activity: state => id => state.activities.find(element => element.id === id),
  user: state => id => state.users.find(element => element.id === id),
  activities: state => state.activities,
  users: state => state.users,
  currentUser: state => state.currentUser,
  loading: state => state.loading
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
