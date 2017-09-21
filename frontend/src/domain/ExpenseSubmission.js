export default class ExpenseSubmission {
  constructor (id, user, date, concept, state, modifiedByReviewer, expenses) {
    this.id = id
    this.user = user
    this.date = date
    this.concept = concept
    this.state = state
    this.modifiedByReviewer = modifiedByReviewer
    this.expenses = expenses
  }

  get total () {
    console.log('gettingTotal')
    return this.expenses.map( expense => expense.amount )
      .reduce( (a, b) => a + b )
  }
}
