import {Router} from 'express';
import courses from './Courses.routes.js'

const routes = Router()

// routes.use('/user')
routes.use('/courses', courses)


export default routes