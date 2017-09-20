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
    const expenses = [
      { id: '456a7a8a9876', userId: '1423oi213j1', activityId: '31i3h1oi3', date: new Date(2017,4,2), concept: 'Qcon London', state:'sumbitted', modified_by_reviewer: true },
      { id: '4564314d9876', userId: '31k2k3j1kj3', activityId: '3ij21i3i3', date: new Date(2016,5,1), concept: 'Client expenses', state:'sumbitted', modified_by_reviewer: false },
      { id: '567b90s9765v', userId: '32kj3123jk2', activityId: '54j343kl5', date: new Date(2017,8,3), concept: 'Barcelona Trip', state:'reviewed', modified_by_reviewer: false },
      { id: '567890s9876s', userId: '4t12f41t2f4', activityId: '5i43j534j', date: new Date(2015,3,2), concept: 'Recruiting expenses', state:'saved', modified_by_reviewer: false },
      { id: 'asd23456f765', userId: 'usadhoi12j3', activityId: '5o454j455', date: new Date(2017,4,2), concept: 'Catch-Up', state:'payed', modified_by_reviewer: true },
    ]
    commit('expenses', expenses)
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
