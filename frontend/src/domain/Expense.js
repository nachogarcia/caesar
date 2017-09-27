export default class Expense {
  constructor (id, activity, date, concept, amount, modified) {
    this.id = id
    this.activity = activity
    this.date = date
    this.concept = concept
    this.amount = amount
    this.modified = modified
  }

  get billable () {
    return this.activity.billable
  }
}
