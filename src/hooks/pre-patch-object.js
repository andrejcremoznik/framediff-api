module.exports = (options = {}) => {
  return async context => {
    const { object: [width, height, title] } = context.data

    const updatedData = {}

    if (width) {
      if (!Number.isNaN(width) && width > 0) {
        updatedData.width = width
      } else {
        throw new Error('Invalid width.')
      }
    }

    if (height) {
      if (!Number.isNaN(height) && height > 0) {
        updatedData.height = height
      } else {
        throw new Error('Invalid height.')
      }
    }

    if (title) {
      if (title.trim()) {
        updatedData.title = title.trim()
      } else {
        throw new Error('Invalid title.')
      }
    }

    context.data = updatedData

    return context
  }
}
