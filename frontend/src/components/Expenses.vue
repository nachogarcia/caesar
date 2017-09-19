<template>
  <div>
    {{ expenses[0].id }}
  </div>
</template>

<script>
import * as Vuex from 'vuex';
export default {
  name: 'Expenses',
  computed: {
    ...Vuex.mapGetters(['expenses']),
  },
  methods: {
    ...Vuex.mapActions(['updateExpenses']),

    selectExpense (expense) {
      this.$store.commit('expense', expense);
      //this.$router.push('site');
    },
  },

  created () {
    this.$store.dispatch('updateExpenses')
  }
}
</script>
