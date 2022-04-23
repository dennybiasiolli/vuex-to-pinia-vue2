import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Counter from '@/components/Counter.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Counter.vue', () => {
  let store;
  let mutations = {
    increment: jest.fn(),
  }
  let actions = {
    incrementAsync: jest.fn(),
  }
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        count: 0,
      },
      getters: {
        isEven: () => true,
      },
      mutations,
      actions,
    })
  })
  test('should respect the snapshot', () => {
    const wrapper = shallowMount(Counter, { localVue, store })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('increment button should call store mutation', () => {
    const wrapper = shallowMount(Counter, { localVue, store })
    wrapper.findAll('button').at(0).trigger('click')
    expect(mutations.increment).toHaveBeenCalled()
  })

  test('incrementAsync button should call store action', () => {
    const wrapper = shallowMount(Counter, { localVue, store })
    wrapper.findAll('button').at(1).trigger('click')
    expect(actions.incrementAsync).toHaveBeenCalled()
  })
})
