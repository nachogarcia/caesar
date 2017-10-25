import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import Vuex from 'vuex'
import { state, mutations, getters } from '@/store'
import Expenses from '@/components/Expenses'

import Expense from '@/domain/Expense'
import User from '@/domain/User'
import Activity from '@/domain/Activity'
import Status from '@/domain/Status'

const expenses = [
  new Expense(
    'expenseId1',
    new User('userId1', 'userName1', ['role1'], true),
    new Activity('activityId1', 'activityName', 'daily', true),
    'an image',
    'a concept',
    100,
    new Status({ submitted: '2017-04-01' })
  ),
  new Expense(
    'expenseId2',
    new User('userId2', 'userName2', ['role2'], true),
    new Activity('activityId2', 'activityName', 'daily', true),
    'an image',
    'a concept',
    39,
    new Status({ submitted: '2016-03-21' })
  )
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
    await Vue.nextTick()
    expect(actions.updateUsers).toHaveBeenCalled()
    expect(actions.updateActivities).toHaveBeenCalled()
    expect(actions.updateExpenses).toHaveBeenCalled()
  })

  it('renders Expenses', () => {
    store.state.expenses = expenses
    const wrapper = shallow(Expenses, { store })
    const files = wrapper.find('tbody').findAll('tr')

    expect(files.length).toEqual(expenses.length)

    const expense = expenses[0]
    const columns = files.at(0).findAll('td')

    expect(columns.at(0).text()).toEqual(expense.userName)
    expect(columns.at(1).text()).toEqual(expense.activityName)
    expect(columns.at(2).text()).toEqual(expense.concept)
    expect(columns.at(3).text()).toEqual(expense.amount.toString())
    const yesOrNo = isTrue => isTrue ? 'Yes' : 'No'
    expect(columns.at(4).text()).toContain(yesOrNo(expense.billable))
    expect(columns.at(5).text()).toContain(expense.currentStatus)
  })

  it('adds new expenses', () => {
    const wrapper = shallow(Expenses, { store })
    const button = wrapper.find('#addExpense')
    button.trigger('click')

    expect(wrapper.emitted()['bv::show::modal'][0]).toContain('addExpenseModal')
  })

  it('shows expenses in detail', () => {
    const wrapper = shallow(Expenses, { store })
    const file = wrapper.find('tbody').find('tr')
    file.trigger('click')

    expect(wrapper.emitted()['bv::show::modal'][0]).toContain('manageExpenseModal')
  })
})
