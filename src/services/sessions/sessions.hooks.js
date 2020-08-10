const { protect } = require('@feathersjs/authentication-local').hooks
const secretCheck = require('../../hooks/secret-check')
const preSaveSession = require('../../hooks/pre-save-session')
const createOrUpdate = require('../../hooks/create-or-update')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [preSaveSession(), createOrUpdate()],
    update: [preSaveSession()],
    patch: [preSaveSession()],
    remove: [secretCheck()]
  },

  after: {
    all: [protect('secret')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
