import { actions } from '@/store'
import getActivities from '@/APICallers/ActivityCaller'
import getExpenseSubmissions from '@/APICallers/ExpenseSubmissionCaller'
import getUsers from '@/APICallers/UserCaller'

const mockActivities = [ 'An activity' ]
const mockUsers = [ 'A user' ]
const mockExpenseSubmissions = [ 'An expense submission' ]
const getters = {}

jest.mock('@/APICallers/ActivityCaller',
  () => jest.fn(() => mockActivities)
)

jest.mock('@/APICallers/ExpenseSubmissionCaller',
  () => jest.fn(() => mockExpenseSubmissions)
)

jest.mock('@/APICallers/UserCaller',
  () => jest.fn(() => mockUsers)
)

const commit = jest.fn()

describe('Store', () => {
  describe('when updating the activities', () => {
    beforeEach(async () => {
      await actions.updateActivities({ commit })
    })

    it('calls the API', async () => {
      expect(getActivities).toHaveBeenCalled()
    })

    it('sets the state', () => {
      expect(commit).toHaveBeenCalledWith('activities', mockActivities)
    })

    it('locks the state', async () => {
      expect(commit).toHaveBeenCalledWith('busy')
      expect(commit).toHaveBeenCalledWith('free')
    })
  })

  describe('when updating the Expense Submissions', () => {
    beforeEach(async () => {
      await actions.updateExpenseSubmissions({ commit, getters })
    })

    it('calls the API', async () => {
      expect(getExpenseSubmissions).toHaveBeenCalled()
    })

    it('sets the state', () => {
      expect(commit).toHaveBeenCalledWith('expenseSubmissions', mockExpenseSubmissions)
    })

    it('locks the state', async () => {
      expect(commit).toHaveBeenCalledWith('busy')
      expect(commit).toHaveBeenCalledWith('free')
    })
  })

  describe('when updating the users', () => {
    beforeEach(async () => {
      await actions.updateUsers({ commit })
    })

    it('calls the API', async () => {
      expect(getUsers).toHaveBeenCalled()
    })

    it('sets the state', () => {
      expect(commit).toHaveBeenCalledWith('users', mockUsers)
    })

    it('locks the state', async () => {
      expect(commit).toHaveBeenCalledWith('busy')
      expect(commit).toHaveBeenCalledWith('free')
    })
  })
})
