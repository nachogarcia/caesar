const stateVariants = {
  'accepted': 'info',
  'submitted': 'primary',
  'saved': 'secondary',
  'payed': 'success',
  'rejected': 'danger'
}

export default class ExpenseSubmission {
  constructor (id, user, date, concept, state, expenses) {
    this.id = id
    this.user = user
    this.date = date
    this.concept = concept
    this.state = state
    this.expenses = expenses
  }

  get userName () {
    return this.user.name
  }

  get total () {
    return this.expenses.map(expense => expense.amount)
      .reduce((a, b) => Number(a) + Number(b)).toFixed(2)
  }

  get stateVariant () {
    return stateVariants[this.state]
  }

  get modified () {
    return this.expenses.some( expense => expense.modified )
  }
}
