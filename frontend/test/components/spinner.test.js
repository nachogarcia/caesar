import { shallow } from 'vue-test-utils'
import Vuex from 'vuex'
import { getters } from '@/store'
import Spinner from '@/components/Spinner'

describe('Spinner', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: { loading: 1 },
      getters
    })
  })

  it('shows when the store is bussy', () => {
    store.state.loading = 1
    const wrapper = shallow(Spinner, { store })

    expect(wrapper.hasStyle('display', 'block')).toBeTruthy()
  })

  it('doesnt show when the store is free', () => {
    store.state.loading = 0
    const wrapper = shallow(Spinner, { store })

    expect(wrapper.hasStyle('display', 'none')).toBeTruthy()
  })
})
