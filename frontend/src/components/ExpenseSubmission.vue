<template>
  <b-container>
    <h2>{{expenseSubmission.userName}} expense submission</h2>
    <b-form @submit="submitExpense" validated>
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
                :readonly="!expenseSubmission.editable"
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
                :readonly="!expenseSubmission.editable"
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

      <b-row>
        <b-col class="text-center">
          <b-button
            v-if="expenseSubmission.state === 'creating' | expenseSubmission.state === 'saved'"
            variant="link"
            v-b-modal.addExpenseModal
          >
            <icon name="plus-circle" scale="4" />
          </b-button>
        </b-col>
      </b-row>

      <hr />

      <b-row>
        <b-col class="pull-right text-right">
          <strong>Total:</strong> {{expenseSubmission.total}}
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col>
          <b-button
            @click="saveExpense"
            variant="primary"
            block
          >
            Save
          </b-button>
        </b-col>

        <b-col>
          <b-button
            type="submit"
            variant="success"
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
  const AddExpenseModal = () => import('@/components/AddExpenseModal')
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
      saveExpense (evt) {
        evt.preventDefault()
        this.$store.commit('busy')
        this.expenseSubmission.state = 'saved'
        //In the future save Expense
        new Promise( (resolve, reject) => {
          setTimeout( () => {
            alert(JSON.stringify(this.expenseSubmission))
            resolve()
          }, 2000)
        }).then( () => {
          this.$store.commit('free')
          this.$router.push('/')
        })
      },

      submitExpense (evt) {
        evt.preventDefault()
        this.$store.commit('busy')
        this.expenseSubmission.state = 'submitted'
        //In the future submit Expense
        new Promise( (resolve, reject) => {
          setTimeout( () => {
            alert(JSON.stringify(this.expenseSubmission))
            resolve()
          }, 2000)
        }).then( () => {
          this.$store.commit('free')
          this.$router.push('/')
        })
      }
    }
  }
</script>
