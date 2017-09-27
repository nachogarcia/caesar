export default class Expense {
  constructor (activity, date, concept, amount, modified) {
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
