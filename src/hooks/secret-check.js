module.exports = (options = {}) => {
  return async context => {
    const { app, data } = context
    const secrets = app.get('secrets').split(',')

    if (!secrets.includes(data.secret)) {
      throw new Error('Invalid secret.')
    }

    return context
  }
}
