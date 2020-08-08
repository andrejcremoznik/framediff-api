module.exports = (options = {}) => {
  return async context => {
    const { width = 0, height = 0, title = '' } = context.data

    if (Number.isNaN(width) || width <= 0) {
      throw new Error('Invalid width.')
    }

    if (Number.isNaN(height) || height <= 0) {
      throw new Error('Invalid height.')
    }

    if (!title.trim()) {
      throw new Error('Missing title.')
    }

    // Whitelist accepted data
    context.data = {
      width,
      height,
      title: title.trim()
    }

    return context
  }
}
