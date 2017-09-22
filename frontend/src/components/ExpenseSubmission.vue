<template>
  <b-container>
    <h2>{{expenseSubmission.userName}} expense submission</h2>
    <b-form @submit="submitExpense">
      <b-form-row>
        <b-col cols-md="5">
          <h3>
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
          </h3>
        </b-col>

        <b-col cols-md="5">
          <h3>
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
          </h3>
        </b-col>

        <b-col cols-md="2">
          <h3>
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
          </h3>
        </b-col>
      </b-form-row>

      <ExpenseList />
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
  import ExpenseList from '@/components/ExpenseList'

  export default {
    name: 'ExpenseSubmission',

    components: {
      'AddExpenseModal': AddExpenseModal,
      'ExpenseList': ExpenseList
    },

    computed: {
      ...Vuex.mapGetters(['expenseSubmission', 'activities']),
    },

    methods: {
      addExpense () {
        Promise.resolve(this.expenseSubmission.expenses.push(new Expense())).then( () => {
          window.scrollTo(0,document.body.scrollHeight)
        })
      },

      submitExpense (evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.expenseSubmission))
      }
    }
  }
</script>
