<template>
  <b-modal
    id="manageExpenseModal"
    ref="manageExpenseModal"
    title="Expense"
    lazy
  >
    <b-img thumbnail fluid v-bind:src="selectedExpense.image" alt="Expense Image" />
    <p>
    {{selectedExpense.userName}}
    {{selectedExpense.activityName}}
    {{selectedExpense.concept}}
    {{selectedExpense.amount}}
    {{selectedExpense.billable}}
    </p>

    <template slot="modal-footer">
      <b-btn
        variant="secondary"
        @click="close()"
      >
        Close
      </b-btn>

      <b-btn
        v-show="currentUser.reviewer && selectedExpense.isToAcceptOrReject"
        variant="primary"
      >
        Accept
      </b-btn>

      <b-btn
        v-show="currentUser.reviewer && selectedExpense.isToAcceptOrReject"
        variant="danger"
      >
        Reject
      </b-btn>

      <b-btn
        v-show="currentUser.reviewer && selectedExpense.isToPay"
        variant="success"
      >
        Pay
      </b-btn>
    </template>
  </b-modal>
</template>

<script>
  import * as Vuex from 'vuex'
  import Expense from '@/domain/Expense'

  export default {
    name: 'AddExpenseModal',

    computed: {
      ...Vuex.mapGetters(['currentUser', 'selectedExpense']),
    },

    methods: {
      close () {
        this.$refs.manageExpenseModal.hide()
      },

      handleOk (e) {
        e.preventDefault()
        if (this.validExpense()) this.handleSubmit()
      },

      handleSubmit () {
        alert(JSON.stringify([this.user, this.activity, this.image, this.concept, this.amount]))
        this.clearModal()
        this.$refs.manageExpenseModal.hide()
      }
    }
  }
</script>
