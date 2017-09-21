<template>
  <b-container>
    <b-form @submit="submitExpense">
      <b-form-row>
        <b-col cols-md="5">
          <h2>
            <b-form-group
              id="expenseSubmissionConceptGroup"
              label="Concept" label-for="expenseSubmissionConcept"
            >
              <b-form-input
                required
                id="expenseSubmissionConcept"
                v-model="expenseSubmission.concept"
                placeholder="Concept of the expense submission"
              />
            </b-form-group>
          </h2>
        </b-col>

        <b-col cols-md="5">
          <h2>
            <b-form-group
              id="expenseSumbissionDateGroup"
              label="Date" label-for="expenseSubmissionDate"
            >
              <b-form-input
                required
                id="expenseSubmissionDate"
                v-model="expenseSubmission.date"
                type="date"
              />
            </b-form-group>
          </h2>
        </b-col>

        <b-col cols-md="2">
          <h2>
            <b-form-group
              id="expenseSumbissionStateGroup"
              label="State" label-for="expenseSubmissionState"
            >
              <b-badge
                pill
                id="expenseSubmissionState"
                :variant="expenseSubmission.stateVariant"
                class="text-capitalize"
              >
                {{expenseSubmission.state}}
              </b-badge>
            </b-form-group>
          </h2>
        </b-col>
      </b-form-row>

      <h2>Expenses</h2>
      <b-card-group columns>
        <b-card
          v-for="expense in expenseSubmission.expenses"
          :key="expense.date+expense.concept"
          bg-variant="light"
        >

          <b-form-row>
            <b-col cols="10">
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

            <b-col cols="2">
              <b-button
                size="sm"
                variant="danger"
                @click="deleteExpense(expense)"
                class="float-right"
              >
                X
              </b-button>
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

        </b-card>
      </b-card-group>

      <hr />

      <b-row align-h="between">
        <b-col cols="2">
          <b-button
            variant="primary"
            v-b-modal.addExpenseModal
          >
            + Add Expense
          </b-button>
        </b-col>
        <b-col cols="2">
          Total: {{expenseSubmission.total}}
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-button
            type="submit"
            variant="primary"
            class="mt-2"
            block
          >
            Submit
          </b-button>
        </b-col>
      </b-row>
    </b-form>

    <AddExpenseModal />
  </b-container>
</template>

<script>
  import * as Vuex from 'vuex'
  import AddExpenseModal from '@/components/AddExpenseModal'

  export default {
    name: 'ExpenseSubmission',

    components: { 'AddExpenseModal': AddExpenseModal },

    computed: {
      ...Vuex.mapGetters(['expenseSubmission', 'activities']),
    },

    methods: {
      selectActivities () {
        return this.activities.map( activity => {
          return { text: activity.name, value: activity }
        })
      },

      addExpense () {
        Promise.resolve(this.expenseSubmission.expenses.push(new Expense())).then( () => {
          window.scrollTo(0,document.body.scrollHeight)
        })
      },

      deleteExpense(expense) {
        this.expenseSubmission.expenses = this.expenseSubmission.expenses.filter( x => x !== expense)
      },

      submitExpense (evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.expenseSubmission))
      }
    }
  }
</script>
