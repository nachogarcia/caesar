<template>
  <b-container>
    {{expenseSubmission}}
  </b-container>
</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    name: 'ExpenseSubmission',
    data: () => ({}),
    computed: {
      ...Vuex.mapGetters(['expenseSubmission']),
    },
    methods: {}
  }
</script>
