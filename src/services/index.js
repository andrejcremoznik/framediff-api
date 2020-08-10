const objects = require('./objects/objects.service.js')
const sessions = require('./sessions/sessions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(objects)
  app.configure(sessions);
}
