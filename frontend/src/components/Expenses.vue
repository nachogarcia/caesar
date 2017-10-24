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
        :items="expenses"
        :fields="fields"
        :filter="filter"
        :sort-by="'status'"
        :sort-desc=true
        @row-clicked="selectExpense"
        class="pointer"
      >
        <template slot="billable" scope="data">
          {{data.item.billable? 'Yes' : 'No'}}
        </template>
        <template slot="status" scope="data">
          <b-row>
            <b-col md="3">
              <b-badge
                :variant="variantForStatus(data.item.currentStatus)"
                class="text-capitalize"
              >
                {{data.item.currentStatus}}
              </b-badge>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </b-row>
    <div class="text-center">
      <b-button
        id="addExpense"
        variant="link"
        v-b-modal.addExpenseModal
      >
        <icon name="plus-circle" scale="4" />
      </b-button>
    </div>
    <AddExpenseModal />
    <ManageExpenseModal />
  </b-container>
</template>

<script>
  import Expense from '@/domain/Expense'
  import * as Vuex from 'vuex'
  import variantForStatus from '@/domain/VariantForStatus'
  import AddExpenseModal from '@/components/AddExpenseModal'
  import ManageExpenseModal from '@/components/ManageExpenseModal'

  export default {
    name: 'Expenses',
    components: {
      'AddExpenseModal': AddExpenseModal,
      'ManageExpenseModal': ManageExpenseModal,
    },
    data: () => ({
      filter: null,

      fields: [
        {
          key: 'userName',
          label: 'Craftsperson',
          sortable: true,
        },
        {
          key: 'activityName',
          label: 'Activity',
          sortable: true,
        },
        {
          key: 'concept',
          sortable: true,
        },
        {
          key: 'amount',
          sortable: true,
          class: 'text-right',
        },
        {
          key: 'billable',
          sortable: true,
        },
        {
          key: 'status',
          sortable: true,
        },
      ]
    }),

    computed: {
      ...Vuex.mapGetters(['expenses', 'currentUser']),
    },

    methods: {
      variantForStatus,

      ...Vuex.mapActions(['updateUsers', 'updateActivities', 'updateExpenses']),

      selectExpense (expense) {
        this.$store.commit('selectedExpense', expense)
        this.$root.$emit('bv::show::modal','manageExpenseModal');
      },
    },

    async created () {
      await this.updateUsers()
      await this.updateActivities()
      await this.updateExpenses()
    }
  }
</script>
