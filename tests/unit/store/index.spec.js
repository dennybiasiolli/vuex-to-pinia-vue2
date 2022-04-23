import store, { defaultState, getters, mutations, actions } from '@/store'

describe('store', () => {
  describe('state', () => {
    test('should be as expected', () => {
      expect(defaultState).toEqual({
        count: 0,
      })
    })
  })

  describe('getters', () => {
    test('isEven should work as expected', () => {
      expect(getters.isEven({ count: 0 })).toBe(true)
      expect(getters.isEven({ count: 1 })).toBe(false)
      expect(getters.isEven({ count: 2 })).toBe(true)
    })
  })

  describe('mutations', () => {
    test('increment should work as expected', () => {
      const state = { count: 0 }
      mutations.increment(state)
      expect(state.count).toBe(1)
      mutations.increment(state)
      expect(state.count).toBe(2)
    })
  })

  describe('actions', () => {
    test('incrementAsync should work as expected', () => {
      jest.useFakeTimers();
      const context = { commit: jest.fn() }
      actions.incrementAsync(context)
      expect(context.commit).not.toHaveBeenCalled()
      jest.advanceTimersByTime(1000);
      expect(context.commit).toHaveBeenCalledTimes(1)
      expect(context.commit).toHaveBeenCalledWith('increment')
      jest.useRealTimers();
    })
  })

  test('real store', () => {
    jest.useFakeTimers();
    expect(store.state.count).toBe(0)
    expect(store.getters.isEven).toBe(true)
    store.commit('increment')
    expect(store.state.count).toBe(1)
    expect(store.getters.isEven).toBe(false)
    store.commit('increment')
    expect(store.state.count).toBe(2)
    expect(store.getters.isEven).toBe(true)
    store.dispatch('incrementAsync')
    expect(store.state.count).toBe(2)
    jest.advanceTimersByTime(1000);
    expect(store.state.count).toBe(3)
    jest.useRealTimers();
  })
})
