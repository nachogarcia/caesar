<template>
  <b-form-row>
    <h3>Expenses</h3>
    <b-card-group columns>
      <transition-group name="list" mode="out-in" appear>
        <b-card
          v-for="(expense, index) in expenseSubmission.expenses"
          :key="expense.id? expense.id : index"
          :bg-variant="expense.modified? 'warning' : 'light'"
        >

          <b-form-row>
            <b-col :cols="expenseSubmission.editable? 10 : 12">
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
                  :readonly="!expenseSubmission.editable"
                />
              </b-form-group>
            </b-col>

            <b-col cols="2">
              <b-button
                v-if="expenseSubmission.editable"
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
                  :readonly="!expenseSubmission.editable"
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
                  :disabled="!expenseSubmission.editable"
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
                  min="0.01"
                  type="number"
                  :readonly="!expenseSubmission.editable"
                />
              </b-input-group>
            </b-col>

            <b-col cols="3">
              <b-badge v-if="expense.activity.billable" variant="success">Billable</b-badge>
              <b-badge v-else variant="secondary">Not Billable</b-badge>
            </b-col>
          </b-form-row>

        </b-card>
      </transition-group>
    </b-card-group>
  </b-form-row>
</template>

<script>
  import * as Vuex from 'vuex'
  export default {
    name: 'ExpenseList',

    computed: {
      ...Vuex.mapGetters(['expenseSubmission', 'activities']),
    },

    methods: {
      selectActivities () {
        return this.activities.map( activity => {
          return { text: activity.name, value: activity }
        })
      },

      deleteExpense(expense) {
        this.expenseSubmission.expenses = this.expenseSubmission.expenses.filter( x => x !== expense)
      },
    }
  }
</script>

<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .list-move {
    transition: transform 1s;
  }
</style>
