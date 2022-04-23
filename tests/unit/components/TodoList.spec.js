import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue'
import { GET_TODO_LIST } from '@/store/modules/todo-types'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoList.vue', () => {
  let store;
  let todoActions = {
    [GET_TODO_LIST]: jest.fn(),
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        todo: {
          namespaced: true,
          state: {
            todoList: [
              { id: 1, name: 'test', completed: true },
              { id: 2, name: 'test2', completed: false },
            ],
            todoListLoading: false,
            todoListLoadingError: null,
          },
          actions: todoActions,
        },
      },
    })
  })
  test('should respect the snapshot', () => {
    const wrapper = shallowMount(TodoList, { localVue, store })
    expect(wrapper.element).toMatchSnapshot()
  })
})
