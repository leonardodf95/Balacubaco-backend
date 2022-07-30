const Course = require('../models/Courses');

export default class CourseController{

    static async createCourse({ name, description, theme, url }){
        const{course_id, course_name, course_description, course_url} = req.body 
        console.log('course', course)
        console.log('rows', rows)
        try {
            const newCourse = await Course.create({course_id, course_name, course_description, course_url})
            return res.status(200).json(newUser)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async listAllCourses(req, res){
        try {
            const courses = await Course.findAll()
            return res.status(200).json(courses)
        } catch (error) {
            console.log('error', error)
        }
    }

    static async deleteCourse(id){
        const { id } = req.params;
        try {
            await Course.destroy({ where: { course_id: id } })
            return res.status(200).json({ data: `o course_id ${id} foi deletado!`} )
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}