const { protect } = require('@feathersjs/authentication-local').hooks
const secretCheck = require('../../hooks/secret-check')
const preSaveObject = require('../../hooks/pre-save-object')
const prePatchObject = require('../../hooks/pre-patch-object')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [secretCheck(), preSaveObject()],
    update: [secretCheck(), preSaveObject()],
    patch: [secretCheck(), prePatchObject()],
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
