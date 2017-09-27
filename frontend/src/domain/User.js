export default class User {
  constructor (id, name, roles, active) {
    this.id = id
    this.name = name
    this.roles = roles
    this.active = active
  }

  get reviewer () {
    return this.roles.includes('expense-approver')
  }
}
