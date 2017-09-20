import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  expenseSubmissions: [],
  expense: {},
  activities: [],
  users: [],
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
}

const actions = {
  updateUsers ({ commit, state }) {
    // here will be the API call
    const users = [
      {
        id: "u1",
        name: "User1",
        role: ["Apprentice"],
        active: true
      },
      {
        id: "u2",
        name: "User2",
        role: ["Craftsman", "Head of something"],
        active: true
      },
      {
        id: "u3",
        name: "User3",
        role: ["craftsman"],
        active: false
      },
    ]
    commit('users', users)
  },

  updateActivities ({ commit, state }) {
    // here will be the API call
    const activities = [
    {
      id: "a1",
      name: "Conference",
      description: "Conference allowance",
      activitytype: "Daily",
      is_billable: false
    },
    {
      id: "a2",
      name: "Company1",
      description: "Work for the Company1 service",
      activitytype: "Daily",
      is_billable: true
    },
    {
      id: "a3",
      name: "Company2",
      description: "Work for the Company2 service",
      activitytype: "Hourly",
      is_billable: true
    },
    {
      id: "a4",
      name: "Company4",
      description: "",
      activitytype: "Daily",
      is_billable: true
    },
    ]
    commit('activities', activities)
  },

  updateExpenseSubmissions ({ commit, state }) {
    // here will be the API call
    const expenseSubmissions = [
      { id: 'e1', user_id: 'u1', date: "2017-04-02", concept: 'Qcon London', state:'submitted', modified_by_reviewer: true,
        expenses: [
          { activity_id: 'a1', date: "2017-04-01", concept: 'Train' },
          { activity_id: 'a1', date: "2017-04-01", concept: 'Food' },
          { activity_id: 'a2', date: "2017-03-28", concept: 'Consulting' },
        ]
      },
      { id: 'e2', user_id: 'u1', date: "2016-05-01", concept: 'Client expenses', state:'submitted', modified_by_reviewer: false,
        expenses: [
          { activity_id: 'a1', date: "2017-04-01", concept: 'Metro' },
          { activity_id: 'a3', date: "2017-04-01", concept: 'Coaching' },
          { activity_id: 'a2', date: "2017-03-28", concept: 'Consulting' },
        ]
      },
      { id: 'e3', user_id: 'u2', date: "2017-08-03", concept: 'Barcelona Trip', state:'reviewed', modified_by_reviewer: false,
        expenses: [
          { activity_id: 'a1', date: "2017-04-01", concept: 'Bus' },
          { activity_id: 'a1', date: "2017-04-01", concept: 'Food' },
          { activity_id: 'a1', date: "2017-3-28", concept: 'Food' },
        ]
      },
      { id: 'e4', user_id: 'u2', date: "2015-03-02", concept: 'Recruiting expenses', state:'saved', modified_by_reviewer: false,
        expenses: [
          { activity_id: 'a1', date: "2017-04-01", concept: 'Train' },
          { activity_id: 'a1', date: "2017-04-01", concept: 'Food' },
          { activity_id: 'a1', date: "2017-03-28", concept: 'Food' },
        ]
      },
      { id: 'e5', user_id: 'u3', date: "2017-04-02", concept: 'Catch-Up', state:'payed', modified_by_reviewer: true,
        expenses: [
          { activity_id: 'a4', date: "2017-04-01", concept: 'Consulting' },
          { activity_id: 'a3', date: "2017-04-01", concept: 'Consulting' },
          { activity_id: 'a2', date: "2017-03-28", concept: 'Consulting' },
        ]
      },
    ]
    commit('expenseSubmissions', expenseSubmissions)
  }
}

const aggregateSubmissions = (state) => state.expenseSubmissions.map(expenseSubmissionData => {
  let { user_id, ...submission } = expenseSubmissionData
  submission.user = state.users.find( element => element.id == user_id)

  submission.expenses = submission.expenses.map( expenseData => {
    let { activity_id, ...expense } = expenseData
    expense.activity = state.activities.find( element => element.id == activity_id)
    return expense
  })

  return submission
})


const getters = {
  expenseSubmissions: state => aggregateSubmissions(state),
  expenseSubmission: state => state.expenseSubmission,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
