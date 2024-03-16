const routes = require('express').Router()
const controllers = require('../controllers')

routes.get('/', controllers.health.health)

module.exports = routes