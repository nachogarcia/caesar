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
    return this.activity.billable
  }

  get userName () {
    return this.user.name
  }

  get activityName () {
    return this.activity.name
  }

  get currentStatus () {
    return this.status.currentStatus
  }

  get isToAcceptOrReject () {
    return this.status.isToAcceptOrReject
  }

  get isToPay () {
    return this.status.isToPay
  }
}
