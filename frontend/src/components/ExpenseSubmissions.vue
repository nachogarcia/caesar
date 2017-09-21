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
        small
        bordered
        :items="expenseSubmissions"
        :fields="fields"
        :filter="filter"
        :sort-by="'date'"
        :sort-desc=true
        @row-clicked="selectExpense"
      >
        <template slot="craftsperson" scope="data">
          {{user(data.item.user_id).name}}
        </template>
        <template slot="amount" scope="data">
          {{total(data.item)}}
        </template>
        <template slot="status" scope="data">
          <b-row align-h="between">
            <b-col>
              <b-badge
                :variant="getStateVariant(data.item.state)"
                class="text-capitalize"
              >
                {{data.item.state}}
              </b-badge>
            </b-col>
            <b-col>
              <b-badge
                v-if="data.item.modified_by_reviewer"
                variant="danger"
              >
                Modified by reviewer
              </b-badge>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </b-row>
  </b-container>
</template>

<script>
  import * as Vuex from 'vuex';
  import stateVariant from '@/stateVariant';

  export default {
    name: 'ExpenseSubmissions',
    data: () => ({
      filter: null,

      fields: {
        craftsperson: {
          label: 'Craftsperson',
        },
        date: {
          label: 'Date',
          sortable: true,
        },
        concept: {
          label: 'Concept',
        },
        amount: {
          label: 'Amount',
        },
        status: {
          label: 'Status',
        },
      },
    }),

    computed: {
      ...Vuex.mapGetters(['expenseSubmissions', 'user']),
    },

    methods: {
      ...Vuex.mapActions(['updateUsers', 'updateActivities', 'updateExpenseSubmissions']),

      total (expenseSubmission) {
        return expenseSubmission.expenses.map( expense => expense.amount ).reduce( (a, b) => a + b )
      },

      getStateVariant(state){
        return stateVariant[state]
      },

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
