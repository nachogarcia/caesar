<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-fieldset horizontal label="Filter" :label-cols="1">
          <b-form-input v-model="filter" placeholder="Type to Search" />
        </b-form-fieldset>
      </b-col>
    </b-row>
    <b-row>
      <b-table
        striped
        hover
        responsive
        bordered
        :items="expenses"
        :fields="fields"
        :filter="filter"
        :sort-by="date"
        :sort-desc=true
        @row-clicked="selectExpense(item)"
      >
        <template slot="status" scope="data">{{data.item.state}} {{data.item.modified_by_reviewer}}</template>
      </b-table>
    </b-row>
  </b-container>
</template>

<script>
  import * as Vuex from 'vuex';
  export default {
    name: 'Expenses',
    data: () => ({
      filter: null,
      fields: {
        id: {
          label: 'ID',
          sortable: false,
        },
        date: {
          label: 'Date',
          sortable: true,
        },
        concept: {
          label: 'Concept',
          sortable: false,
        },
        status: {
          label: 'Status',
        },
      },
    }),
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
      this.updateExpenses()
    }
  }
</script>
