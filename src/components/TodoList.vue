<template>
  <div>
    <div v-for="todoItem of todoList" :key="todoItem.id">
      <input type="checkbox" v-model="todoItem.completed" />
      <span v-text="todoItem.name"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/todo'

export default {
  computed: {
    ...mapState(useTodoStore, ['todoList', 'todoListLoading', 'todoListLoadingError']),
  },
  mounted() {
    this.getTodoList()
  },
  methods: {
    ...mapActions(useTodoStore, ['getTodoList']),
  },
}
</script>
