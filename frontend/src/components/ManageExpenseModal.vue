<template>
  <b-modal
    id="manageExpenseModal"
    ref="manageExpenseModal"
    title="Expense"
    lazy
  >
    <a :href="selectedExpense.image" target="_blank">
      <b-img
        thumbnail
        fluid
        center
        v-bind:src="selectedExpense.image"
        alt="Expense Image"
      />
    </a>

    <dl class="row">
      <dt class="col-sm-3">User</dt><dd class="col-sm-9">{{selectedExpense.userName}}</dd>
      <dt class="col-sm-3">Activity</dt><dd class="col-sm-9">{{selectedExpense.activityName}}</dd>
      <dt class="col-sm-3">Concept</dt><dd class="col-sm-9">{{selectedExpense.concept}}</dd>
      <dt class="col-sm-3">Amount</dt><dd class="col-sm-9">{{selectedExpense.amount}}</dd>
      <dt class="col-sm-3">Billable</dt><dd class="col-sm-9">{{selectedExpense.billable? 'Yes': 'No'}}</dd>
    </dl>

    <template slot="modal-footer">
      <b-btn
        variant="secondary"
        @click="close()"
      >
        Close
      </b-btn>

      <b-btn
        v-show="currentUser.reviewer && selectedExpense.isToAcceptOrReject"
        variant="danger"
      >
        Reject
      </b-btn>

      <b-btn
        v-show="currentUser.reviewer && selectedExpense.isToAcceptOrReject"
        variant="primary"
      >
        Accept
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
