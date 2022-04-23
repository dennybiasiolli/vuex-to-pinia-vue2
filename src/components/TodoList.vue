<template>
  <div>
    <div v-for="todoItem of todoList" :key="todoItem.id">
      <input type="checkbox" v-model="todoItem.completed" />
      <span v-text="todoItem.name"></span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { GET_TODO_LIST } from '@/store/modules/todo-types'

const { mapState, mapActions } = createNamespacedHelpers('todo')

export default {
  computed: {
    ...mapState(['todoList', 'todoListLoading', 'todoListLoadingError']),
  },
  mounted() {
    this[GET_TODO_LIST]()
  },
  methods: {
    ...mapActions([GET_TODO_LIST]),
  },
}
</script>
