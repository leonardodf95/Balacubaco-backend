 const {Router} = require('express');
//import courses from './Courses.routes.js'
const partnerRoutes = require('./Partners.routes.js')

const routes = Router()

// routes.use('/user')
//routes.use('/courses', courses)
routes.use(partnerRoutes)


//export default routes

module.exports = routes