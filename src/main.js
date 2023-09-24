const core = require('@actions/core')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    core.debug('Schema Input:', core.getInput('schema', { required: true }))
    core.debug(
      'JSON Files Input:',
      core.getInput('json-files', { required: true })
    )

    // Set outputs for other workflow steps to use
    const successOutput = true
    const errorsOutput = [
      {
        message: "json didn't validate",
        line: 2,
        position: 8
      },
      {
        message: "json still didn't validate",
        line: 4,
        position: 2
      }
    ]
    core.debug('setting Success Output:', successOutput)
    core.setOutput('success', successOutput)
    core.debug('setting Errors Output:', errorsOutput)
    core.setOutput('errors', errorsOutput)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
