import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue'
import { useTodoStore } from '@/stores/todo'

const localVue = createLocalVue()
localVue.use(PiniaVuePlugin)

describe('TodoList.vue', () => {
  let pinia;
  let todoStore;
  beforeEach(() => {
    pinia = createTestingPinia({
      initialState: {
        todo: {
          todoList: [
            { id: 1, name: 'test', completed: true },
            { id: 2, name: 'test2', completed: false },
          ],
          todoListLoading: false,
          todoListLoadingError: null,
        },
      },
    })
    todoStore = useTodoStore()
  })
  test('should respect the snapshot', () => {
    const wrapper = shallowMount(TodoList, { localVue, pinia })
    expect(wrapper.element).toMatchSnapshot()
    expect(todoStore.getTodoList).toHaveBeenCalledWith()
  })
})
