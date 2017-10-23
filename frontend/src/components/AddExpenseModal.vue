<template>
  <b-modal
    id="addExpenseModal"
    ref="addExpenseModal"
    title="Add Expense"
    @ok="handleOk"
    @shown="clearModal"
    lazy
  >
    <b-form @submit.stop.prevent="handleSubmit" validated>
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
              v-model="concept"
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
              v-model="activity"
              :options="selectActivities()"
              class="mb-3"
            />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-form-group
            horizontal
            id="expenseImageGroup"
            label="Image" label-for="expenseImage"
          >
            <b-form-file id="expenseImage" v-model="image" required />
          </b-form-group>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col>
          <b-input-group>
            <b-input-group-addon>
              <icon name="money" />
            </b-input-group-addon>
            <b-form-input
              required
              id="expenseAmount"
              v-model="amount"
              placeholder="0.00"
              step="0.01"
              min="0.01"
              type="number"
            />
          </b-input-group>
        </b-col>

        <b-col cols="3">
          <b-badge v-if="activity.billable" variant="success">Billable</b-badge>
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
      user: {},
      activity: {},
      image: {},
      concept: '',
      amount: '',
    }),

    computed: {
      ...Vuex.mapGetters(['activities', 'currentUser']),
    },

    methods: {
      selectActivities () {
        return this.activities.map( activity => {
          return { text: activity.name, value: activity }
        })
      },

      clearModal () {
        this.user = this.currentUser
        this.activity = ''
        this.image = {}
        this.concept = ''
        this.amount = ''
      },

      validExpense () {
        return this.activity !== '' && this.image !== '' && this.concept != '' && this.amount > 0
      },

      handleOk (e) {
        e.preventDefault()
        if (this.validExpense()) this.handleSubmit()
      },

      handleSubmit () {
        alert(JSON.stringify([this.user, this.activity, this.image, this.concept, this.amount]))
        this.clearModal()
        this.$refs.addExpenseModal.hide()
      },
    },
  }
</script>
