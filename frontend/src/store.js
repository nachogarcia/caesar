import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  expenses: [],
  expense: {}
}

const mutations = {
  expenses (state, expenses) {
    state.expenses = expenses
  },
  expense (state, expense) {
    state.expense = expense
  }
}

const actions = {
  updateExpenses ({ commit, state }) {
    // here will be the API call
    commit('expenses', [ {id: 'an id'} ])
  }
}

const getters = {
  expenses: state => state.expenses,
  expense: state => state.expense
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
