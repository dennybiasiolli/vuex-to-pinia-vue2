<template>
  <div>
    <div>
      count is: {{ count }}
    </div>
    <div>
      isEven is: {{ isEven }}
      |
      isOdd is: {{ isOdd }}
    </div>
    <button @click="increment">increment sync</button>
    &nbsp;
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from '@/stores/main'

export default {
  computed: {
    ...mapState(useStore, ['count', 'isEven', 'isOdd']),
  },
  methods: {
    ...mapActions(useStore, ['increment', 'incrementAsync']),
  },
}
</script>
