export default class Expense {
  constructor (activity, date, concept, amount) {
    this.activity = activity
    this.date = date
    this.concept = concept
    this.amount = amount
  }

  get billable () {
    return this.activity.billable
  }
}
