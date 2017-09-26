const ExpenseSubmissionRepository = require('domain/ExpenseSubmissionRepository')
const repository = new ExpenseSubmissionRepository()

module.exports.GET_ExpenseSubmission = (event, context, callback) => {
  handleAction(repository.get, event, context, callback)
}

module.exports.POST_ExpenseSubmission = (event, context, callback) => {
  handleAction(repository.add, event, context, callback)
}

module.exports.PUT_ExpenseSubmission = (event, context, callback) => {
  handleAction(repository.put, event, context, callback)
}

module.exports.DELETE_ExpenseSubmission = (event, context, callback) => {
  handleAction(repository.delete, event, context, callback)
}

async function handleAction (operation, event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    const result = await operation(event.body)
    callback(null, generateResponse(200, result))
  } catch (error) {
    callback(null, generateResponse(400, error))
  }
}

function generateResponse (code, result) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(result)
  }
}
