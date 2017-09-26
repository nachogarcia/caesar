const { Client } = require('pg')
const uuid = require('uuid/v4')

const ExpenseSubmissionRepository = require('../domain/ExpenseSubmissionRepository')
const ExpenseSubmission = require('../domain/ExpenseSubmission')
const Expense = require('../domain/Expense')

describe('ExpenseSubmissionRepository', () => {
  let connection
  let repository
  let id
  let expenseSubmission
  let expenses

  beforeEach(async () => {
    expenses = [
      new Expense(uuid(), 'a1', new Date(2017, 4, 1), 'Train', 9.85),
      new Expense(uuid(), 'a2', new Date(2017, 4, 2), 'Food', 10.31)
    ]
    id = uuid()
    expenseSubmission = new ExpenseSubmission(
      id,
      'userId',
      new Date(2017, 4, 1),
      'Some concept',
      'submitted',
      false,
      expenses
    )

    connection = new Client('postgresql://nacho:nacho@localhost:5432/users')
    await connection.connect()
    await connection.query('CREATE TABLE IF NOT EXISTS expenseSubmissions (id UUID CONSTRAINT pkey PRIMARY KEY, user_id text, date Date, concept text, state text, modified_by_reviewer boolean, expenses jsonb)')
    await connection.query('CREATE UNIQUE INDEX IF NOT EXISTS id_index ON expenseSubmissions (id)')
    await connection.query('CREATE INDEX IF NOT EXISTS user_index ON expenseSubmissions (user_id)')
    await connection.query('CREATE INDEX IF NOT EXISTS date_index ON expenseSubmissions (date)')
    repository = new ExpenseSubmissionRepository(connection)
  })

  afterEach(async () => {
    await connection.query('DROP INDEX IF EXISTS id_index')
    await connection.query('DROP INDEX IF EXISTS user_index')
    await connection.query('DROP INDEX IF EXISTS date_index')
    await connection.query('DROP TABLE IF EXISTS expenseSubmissions')
    await connection.end()
  })

  it('inserts expenseSubmissions', async () => {
    await repository.insert(expenseSubmission)

    expect(repository.all()).resolves.toEqual([expenseSubmission])
  })

  it('updates expenseSubmissions', async () => {
    await repository.insert(expenseSubmission)
    expenseSubmission.state = 'anotherState'

    await repository.update(expenseSubmission)

    expect(repository.all()).resolves.toEqual([expenseSubmission])
  })

  it('removes expenseSubmissions', async () => {
    await repository.insert(expenseSubmission)

    await repository.delete(expenseSubmission.id)

    expect(repository.all()).resolves.toEqual([])
  })

  it('gets all expenseSubmissions', async () => {
    await repository.insert(expenseSubmission)

    expect(repository.all()).resolves.toEqual([expenseSubmission])
  })

  it('finds expenseSubmissions by id', async () => {
    await repository.insert(expenseSubmission)

    expect(repository.findById(expenseSubmission.id)).resolves.toEqual([expenseSubmission])
  })
})
