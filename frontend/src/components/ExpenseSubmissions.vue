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
        :items="expenseSubmissions"
        :fields="fields"
        :filter="filter"
        :sort-by="'date'"
        :sort-desc=true
        @row-clicked="selectExpense"
      >
        <template slot="status" scope="data">
          <b-row>
            <b-col>
              <b-badge :variant="stateVariant[data.item.state]">{{data.item.state}}</b-badge>
            </b-col>
            <b-col>
              <b-badge v-if="data.item.modified_by_reviewer" variant="danger">Modified by reviewer</b-badge>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </b-row>
  </b-container>
</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    name: 'ExpenseSubmissions',
    data: () => ({
      filter: null,

      fields: {
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

      stateVariant : {
        'submitted': 'primary',
        'reviewed': 'info',
        'saved': 'default',
        'payed': 'success'
      }
    }),

    computed: {
      ...Vuex.mapGetters(['expenseSubmissions']),
    },

    methods: {
      ...Vuex.mapActions(['updateUsers', 'updateActivities', 'updateExpenseSubmissions']),

      selectExpense (expense) {
        this.$store.commit('expenseSubmission', expense);
        this.$router.push('expenseSubmission');
      },
    },

    created () {
      this.updateUsers()
      this.updateActivities()
      this.updateExpenseSubmissions()
    }
  }
</script>
