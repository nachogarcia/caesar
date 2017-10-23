export default class Expense {
  constructor (id, user, activity, image, concept, amount, status) {
    this.id = id
    this.user = user
    this.activity = activity
    this.image = image
    this.concept = concept
    this.amount = amount
    this.status = status
  }

  get billable () {
    return this.activity && this.activity.billable
  }

  get userName () {
    return this.user.name
  }

  get activityName () {
    return this.activity.name
  }

  get currentStatus () {
    if (this.status.payed) return 'payed'
    if (this.status.accepted) return 'accepted'
    if (this.status.rejected) return 'rejected'
    if (this.status.submitted) return 'submitted'
  }

  get isToAcceptOrReject () {
    return !(this.status.accepted || this.status.rejected || this.status.payed)
  }

  get isToPay () {
    return this.status.accepted && !this.status.payed
  }
}
