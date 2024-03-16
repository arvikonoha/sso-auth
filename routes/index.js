const routes = require('express').Router()

routes.use('/auth', require('./auth'))
routes.use('/health', require('./health'))

module.exports = routes