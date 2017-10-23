import { actions, getters } from '@/store'
import getActivities from '@/APICallers/ActivityCaller'
import getExpenses from '@/APICallers/ExpensesCaller'
import getUsers from '@/APICallers/UserCaller'
import findImage from '@/APICallers/ImageCaller'

const mockActivities = [ 'An activity' ]
const mockUsers = [ 'A user' ]
const mockExpenses = [ 'An expense' ]

jest.mock('@/APICallers/ActivityCaller',
  () => jest.fn(() => mockActivities)
)

jest.mock('@/APICallers/ExpensesCaller',
  () => jest.fn(() => mockExpenses)
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

  describe('when updating the Expenses', () => {
    beforeEach(async () => {
      await actions.updateExpenses({ commit, getters, findImage })
    })

    it('calls the API', async () => {
      expect(getExpenses).toHaveBeenCalled()
    })

    it('sets the state', () => {
      expect(commit).toHaveBeenCalledWith('expenses', mockExpenses)
    })

    it('locks the state', async () => {
      expect(commit).toHaveBeenCalledWith('busy')
      expect(commit).toHaveBeenCalledWith('free')
    })
  })

  describe('when updating the users', () => {
    beforeEach(async () => {
      await actions.updateUsers({ commit, getters })
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
