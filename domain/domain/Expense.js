class Expense {
  constructor (id, activityId, date, concept, amount) {
    this.id = id
    this.activityId = activityId
    this.date = date
    this.concept = concept
    this.amount = amount
  }
}

module.exports = Expense
