<template>
  <div>
    <div>
      count is: {{ count }}
    </div>
    <div>
      <span v-if="isEven">&nbsp;is even</span>
      <span v-else>&nbsp;is odd</span>
    </div>
    <button @click="increment">increment sync</button>
    &nbsp;
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['isEven']),
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync']),
  },
}
</script>
