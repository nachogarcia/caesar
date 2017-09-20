<template>
  <b-container>
    {{expense}}
  </b-container>
</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    name: 'Expenses',
    data: () => ({}),
    computed: {
      ...Vuex.mapGetters(['expense']),
    },
    methods: {}
  }
</script>
