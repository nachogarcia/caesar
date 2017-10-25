import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import Vuex from 'vuex'
import { state, mutations, getters } from '@/store'
import ManageExpenseModal from '@/components/ManageExpenseModal'

import Expense from '@/domain/Expense'
import User from '@/domain/User'
import Activity from '@/domain/Activity'

const selectedExpense = new Expense('expenseId1', new User('userId1', 'userName1', ['role1'], true), new Activity('activityId1', 'activityName', 'daily', true), 'an image', 'a concept', 100, { submitted: '2017-04-01' })

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

  it('renders the expense', async () => {
    store.state.selectedExpense = selectedExpense
    const wrapper = shallow(ManageExpenseModal, { store })
    wrapper.vm.$emit('bv::show::modal','manageExpenseModal')
    await Vue.nextTick()

    const image = wrapper.find('img')
    expect(image.hasAttribute('src', selectedExpense.image)).toBeTruthy()

    const details = wrapper.findAll('dd')
    expect(details.at(0).text()).toEqual(selectedExpense.userName)
    expect(details.at(1).text()).toEqual(selectedExpense.activityName)
    expect(details.at(2).text()).toEqual(selectedExpense.concept)
    expect(details.at(3).text()).toEqual(selectedExpense.amount.toString())
    const yesOrNo = isTrue => isTrue ? 'Yes' : 'No'
    expect(details.at(4).text()).toEqual(yesOrNo(selectedExpense.billable))
  })
})
