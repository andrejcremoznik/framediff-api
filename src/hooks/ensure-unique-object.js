module.exports = (options = {}) => {
  return async context => {
    const objectsService = context.app.service('objects')
    const { title } = context.data

    const existingObject = await objectsService.find({ query: { title } })

    if (existingObject.data.length) {
      throw new Error('Object already exists.')
    }

    return context
  }
}
