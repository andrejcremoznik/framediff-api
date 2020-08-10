module.exports = (options = {}) => {
  return async context => {
    const { secret = '', objects = [] } = context.data

    if (!secret.trim()) {
      throw new Error('Invalid secret.')
    }

    if (!Array.isArray(objects)) {
      throw new Error('Invalid objects data.')
    }

    if (!objects.length) {
      throw new Error('Objects can’t be empty.')
    }

    // Whitelist accepted data
    context.data = {
      secret: secret.trim(),
      objects: objects.map(([width, height, title]) => ([width, height, title.trim()]))
    }

    return context
  }
}
