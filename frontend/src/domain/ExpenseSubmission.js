export default class ExpenseSubmission {
  constructor (id, user, date, concept, state, expenses) {
    this.id = id
    this.user = user
    this.date = date
    this.concept = concept
    this.state = state
    this.expenses = expenses
  }
}
