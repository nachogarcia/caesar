import { mount } from 'avoriaz'
import Vue from 'vue'
import Vuex from 'vuex'
import Spinner from '@/components/Spinner'
import { getters } from '@/store'

Vue.use(Vuex)
Vue.config.ignoredElements = ['icon']

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
    const wrapper = mount(Spinner, { store })

    expect(wrapper.hasStyle('display', 'none')).toBeFalsy()
  })

  it('doesnt show when the store is free', () => {
    store.state.loading = 0
    const wrapper = mount(Spinner, { store })

    expect(wrapper.hasStyle('display', 'none')).toBeTruthy()
  })
})
