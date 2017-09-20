<template>
  <b-container>
    <b-form @submit="submitExpense">
      <b-form-row>
        <b-col>
          <h2>
            <b-form-group
              id="expenseSubmissionConceptGroup"
              label="Concept" label-for="expenseSubmissionConcept"
            >
              <b-form-input
                id="expenseSubmissionConcept"
                v-model="expenseSubmission.concept"
                placeholder="Concept of the expense submission"
              />
            </b-form-group>
          </h2>
        </b-col>

        <b-col>
          <h2>
            <b-form-group
              id="expenseSumbissionDateGroup"
              label="Date" label-for="expenseSubmissionDate"
            >
              <b-form-input
                id="expenseSubmissionDate"
                v-model="expenseSubmission.date"
                type="date"
              />
            </b-form-group>
          </h2>
        </b-col>

        <b-col>
          <h2>
          <b-badge :variant="getStateVariant(expenseSubmission.state)">{{expenseSubmission.state}}</b-badge>
          </h2>
        </b-col>
      </b-form-row>

      <h2>Expenses</h2>
      <div v-for="expense in expenseSubmission.expenses">
        <b-form-row>
          <b-col>
            <b-form-group
              horizontal
              id="expenseConceptGroup"
              label="Concept" label-for="expenseConcept"
            >
              <b-form-input
                id="expenseConcept"
                v-model="expense.concept"
                placeholder="Concept of the expense"
              />
            </b-form-group>

            <b-form-group
              horizontal
              id="expenseDateGroup"
              label="Date" label-for="expenseDate"
            >
              <b-form-input
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
              id="expenseActivityGroup"
              label="Activity" label-for="expenseActivity"
            >
              <b-form-select
                id="expenseActivity"
                v-model="expense.activity_id"
                :options="activities"
                class="mb-3"
                text-field="name"
                value-field="id"
              />
            </b-form-group>

            <b-badge v-if="activity(expense.activity_id).is_billable" variant="success">Billable</b-badge>
            <b-badge v-else variant="secondary">Not Billable</b-badge>
          </b-col>
        </b-form-row>
        <hr />
      </div>

      <b-form-row>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form-row>
    </b-form>
  </b-container>
</template>

<script>
  import * as Vuex from 'vuex';
  import stateVariant from '@/stateVariant';

  export default {
    name: 'ExpenseSubmission',
    computed: {
      ...Vuex.mapGetters(['expenseSubmission', 'activity', 'activities']),
    },
    methods: {
      getStateVariant(state){
        return stateVariant[state]
      },

      submitExpense(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.expenseSubmission));
      }
    }
  }
</script>
