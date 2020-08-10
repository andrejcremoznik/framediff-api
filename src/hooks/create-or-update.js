module.exports = (options = {}) => {
  return async context => {
    const sessionsService = context.app.service('sessions')
    const { secret } = context.data

    const existingSession = await sessionsService.find({ query: { secret } })

    if (existingSession.data.length) {
      const result = await sessionsService.update(existingSession.data[0]._id, context.data)
      context.result = result
    }

    return context
  }
}
