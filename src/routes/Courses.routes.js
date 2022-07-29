/*import {Router} from 'express'
import CourseController from '../controllers/CoursesController.js'

const courses = Router()


courses.get('/', async(request, response)=>{
    const data = await CourseController.listAllCourses()
    return response.send(data).status(200)
})

courses.post('/', async(req, res) =>{
    try {
        const data = await CourseController.createCourse(req.body)
        res.status(201).send(data)        
    } catch (error) {
        res.status(400).send(error.message)
    }
})

courses.delete('/', async(req, res) =>{
    try {
        const {id} = req.query
        const data = await CourseController.deleteCourse(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

export default courses
*/