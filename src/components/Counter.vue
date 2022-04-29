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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['isEven', 'isOdd']),
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync']),
  },
}
</script>
