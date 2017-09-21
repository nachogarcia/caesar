<template>
  <b-modal
    id="addExpenseModal"
    title="Add a new Expense"
    @ok="submit"
    @shown="clearModal"
  >
    <b-form @submit.stop.prevent="submit">
      <b-form-row>
        <b-col>
          <b-form-group
            horizontal
            id="expenseDateGroup"
            label="Date" label-for="expenseDate"
          >
            <b-form-input
              required
              id="expenseDate"
              v-model="expense.date"
              type="date"
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group
            horizontal
            id="expenseConceptGroup"
            label="Concept" label-for="expenseConcept"
          >
            <b-form-input
              required
              id="expenseConcept"
              v-model="expense.concept"
              placeholder="Concept of the expense"
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group
            horizontal
            id="expenseActivityGroup"
            label="Activity" label-for="expenseActivity"
          >
            <b-form-select
              required
              id="expenseActivity"
              v-model="expense.activity"
              :options="selectActivities()"
              class="mb-3"
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-input-group
              left="$"
          >
            <b-form-input
              required
              id="expenseAmount"
              v-model="expense.amount"
              placeholder="0.00"
              step="0.01"
              min="0.00"
              type="number"
            />
          </b-input-group>
        </b-col>

        <b-col cols="3">
          <b-badge v-if="expense.activity.billable" variant="success">Billable</b-badge>
          <b-badge v-else variant="secondary">Not Billable</b-badge>
        </b-col>
      </b-form-row>
    </b-form>
  </b-modal>
</template>

<script>
  import * as Vuex from 'vuex'
  import Expense from '@/domain/Expense'

  export default {
    name: 'AddExpenseModal',

    data: () => ({
      expense: new Expense({}, '', '', 0.00)
    }),

    computed: {
      ...Vuex.mapGetters(['expenseSubmission', 'activities']),
    },

    methods: {
      selectActivities () {
        return this.activities.map( activity => {
          return { text: activity.name, value: activity }
        })
      },

      clearModal () {
        this.expense = new Expense({}, '', '', 0.00)
      },

      submit (e) {
        e.preventDefault()
        this.expenseSubmission.expenses.push(this.expense)
      },
    },
  }
</script>
