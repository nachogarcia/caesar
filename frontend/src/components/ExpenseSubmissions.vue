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
        <template slot="userName" scope="data">
          {{getUserName(data.item)}}
        </template>

        <template slot="status" scope="data">
          <b-row>
            <b-col cols="2">
              <b-badge
                :variant="data.item.stateVariant"
                class="text-capitalize"
              >
                {{data.item.state}}
              </b-badge>
            </b-col>
            <b-col cols="2">
              <b-badge
                v-if="data.item.modifiedByReviewer"
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
  import * as Vuex from 'vuex'

  export default {
    name: 'ExpenseSubmissions',
    data: () => ({
      filter: null,

      fields: [
        {
          key: 'userName',
          label: 'Craftsperson',
        },
        {
          key: 'date',
          label: 'Date',
          sortable: true,
        },
        {
          key: 'concept',
          label: 'Concept',
          sortable: true,
        },
        {
          key: 'total',
          label: 'Amount',
        },
        {
          key: 'status',
          label: 'Status',
        },
      ]
    }),

    computed: {
      ...Vuex.mapGetters(['expenseSubmissions']),
    },

    methods: {
      ...Vuex.mapActions(['updateUsers', 'updateActivities', 'updateExpenseSubmissions']),

      getUserName (expenseSubmission) {
        return expenseSubmission.user.name
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
