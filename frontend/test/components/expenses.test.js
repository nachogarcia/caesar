import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import Vuex from 'vuex'
import { state, mutations, getters } from '@/store'
import Expenses from '@/components/Expenses'

import Expense from '@/domain/Activity'
import User from '@/domain/User'
import Activity from '@/domain/Activity'

const expenses = [
  new Expense('expenseId1', new User('userId1', 'userName1', ['role1'], true), new Activity('activityId1', 'activityName', 'daily', true), 'an image', 'a concept', 100, { submitted: '2017-04-01' }),
  new Expense('expenseId2', new User('userId2', 'userName2', ['role2'], true), new Activity('activityId2', 'activityName', 'daily', true), 'an image', 'a concept', 39, { submitted: '2016-03-21' }),
]

const actions = {
  updateUsers: jest.fn(() => Promise.resolve()),
  updateActivities: jest.fn(() => Promise.resolve()),
  updateExpenses: jest.fn(() => Promise.resolve())
}


describe('Expenses', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state,
      mutations,
      actions,
      getters
    })
  })

  it('updates the store on creation', async () => {
    const wrapper = shallow(Expenses, { store })
    expect(actions.updateUsers).toHaveBeenCalled()
    await Vue.nextTick()
    expect(actions.updateActivities).toHaveBeenCalled()
    await Vue.nextTick()
    expect(actions.updateExpenses).toHaveBeenCalled()
  })

  it('shows Expenses', () => {
    store.state.expenses = expenses
    const wrapper = shallow(Expenses, { store })
    const files = wrapper.find('tbody').findAll('tr')

    expect(files.length).toEqual(expenses.length)
  })

  it('adds expenses', () => {
    const wrapper = shallow(Expenses, { store })
    const button = wrapper.find('#addExpense')
    button.trigger('click')

    expect(wrapper.emitted()['bv::show::modal'][0]).toContain('addExpenseModal')
  })

  it('shows expenses', () => {
    const wrapper = shallow(Expenses, { store })
    const file = wrapper.find('tbody').find('tr')
    file.trigger('click')

    expect(wrapper.emitted()['bv::show::modal'][0]).toContain('manageExpenseModal')
  })
})
