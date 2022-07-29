const {Router} = require('express');
const partnerRoutes = require('./Partners.routes.js')
const userRoutes = require('./User.routes.js')

const routes = Router()

// routes.use('/user')
//routes.use('/courses', courses)
routes.use(partnerRoutes)
routes.use(userRoutes)

//export default routes

module.exports = routes