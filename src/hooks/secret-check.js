module.exports = (options = {}) => {
  return async context => {
    const { app, data } = context
    const secrets = app.get('secrets').split(',')

    if (!secrets.includes(data.secret)) {
      throw new Error('Invalid passphrase. You aren’t allowed to save global objects.')
    }

    return context
  }
}
