const objects = require('./objects/objects.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(objects)
}
