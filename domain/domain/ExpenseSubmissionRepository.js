const ExpenseSubmission = require('./ExpenseSubmission')
const Expense = require('./Expense')

const parse = (expenseSubmission) => [
  expenseSubmission.id,
  expenseSubmission.userId,
  expenseSubmission.date,
  expenseSubmission.concept,
  expenseSubmission.state,
  expenseSubmission.modifiedByReviewer,
  JSON.stringify(expenseSubmission.expenses)
]
const newExpenseSubmission = (data) => new ExpenseSubmission(data['id'], data['user_id'], data['date'], data['concept'], data['state'], data['modified_by_reviewer'], newExpenseList(data['expenses']))
const newExpenseList = (expenses) => expenses.map(data => new Expense(data['id'], data['activityId'], new Date(data.date), data['concept'], data['amount']))

class ExpenseSubmissionRepository {
  constructor (connection) {
    this.connection = connection
  }

  async insert (expenseSubmission) {
    return this.connection.query('INSERT INTO expenseSubmissions (id, user_id, date, concept, state, modified_by_reviewer, expenses) VALUES ($1, $2, $3, $4, $5, $6, $7)', parse(expenseSubmission))
  }

  async all () {
    const result = await this.connection.query('SELECT * FROM expenseSubmissions')
    return result.rows.map(data => newExpenseSubmission(data))
  }

  async findById (id) {
    const result = await this.connection.query('SELECT * FROM expenseSubmissions WHERE id = $1', [id])
    return result.rows.map(data => newExpenseSubmission(data))
  }

  async update (expenseSubmission) {
    return this.connection.query('UPDATE expenseSubmissions SET user_id = $2, date = $3, concept = $4, state = $5, modified_by_reviewer = $6, expenses = $7 WHERE id = $1', parse(expenseSubmission))
  }

  async delete (id) {
    return this.connection.query('DELETE FROM expenseSubmissions WHERE id = $1', [id])
  }
}

module.exports = ExpenseSubmissionRepository
