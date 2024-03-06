const routes = require('express').Router()
const controllers = require('../controllers')

routes.post('/login', controllers.auth.login)
routes.post('/register', controllers.auth.register)

module.exports = routes