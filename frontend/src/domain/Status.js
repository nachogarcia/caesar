export default class Status {
  constructor (status) {
    this.status = status
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
