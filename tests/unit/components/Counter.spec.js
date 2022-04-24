import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Counter from '@/components/Counter.vue'
import { useStore } from '@/stores/main'

const localVue = createLocalVue()
localVue.use(PiniaVuePlugin)

describe('Counter.vue', () => {
  let pinia
  let store
  beforeEach(() => {
    pinia = createTestingPinia({
      initialState: {
        main: {
          count: 0,
        },
      },
    })
    store = useStore()
    // store.isEven = true // getters are writable only with Vue 3
    // store.isOdd = false // getters are writable only with Vue 3
  })
  test('should respect the snapshot', () => {
    const wrapper = shallowMount(Counter, { localVue, pinia })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('increment button should call store mutation', () => {
    const wrapper = shallowMount(Counter, { localVue, pinia })
    wrapper.findAll('button').at(0).trigger('click')
    expect(store.increment).toHaveBeenCalled()
  })

  test('incrementAsync button should call store action', () => {
    const wrapper = shallowMount(Counter, { localVue, pinia })
    wrapper.findAll('button').at(1).trigger('click')
    expect(store.incrementAsync).toHaveBeenCalled()
  })
})
