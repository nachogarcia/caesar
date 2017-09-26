class ExpenseSubmission {
  constructor (id, userId, date, concept, state, modifiedByReviewer, expenses) {
    this.id = id
    this.userId = userId
    this.date = date
    this.concept = concept
    this.state = state
    this.modifiedByReviewer = modifiedByReviewer
    this.expenses = expenses
  }
}

module.exports = ExpenseSubmission
