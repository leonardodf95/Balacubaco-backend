import Course from "../models/Courses.js";
import db from '../config/dbConfig.cjs';

export default class CourseController{
    static async createCourse({ name, description, theme, url }){
        try {
            const course = new Course(name, description, theme, url)

            const {rows} = await db.query("INSERT INTO courses (id, name, description, url) VALUES ($1, $2, $3, $4)", [course.id, course.name, course.description, course.url])

            console.log('course', course)
            console.log('rows', rows)

            return course
            
        } catch (error) {
            console.log('error', error)
        } 
    }

    static async listAllCourses(){
        try {
            const response = await db.query('SELECT * from courses ORDER BY name')
            return response.rows
        } catch (error) {
            console.log('error', error)
        }
    }

    static async deleteCourse(id){
        try {
            const {rows} = await db.query('SELECT * from courses where id = $1', [id])
            const deleteCourse = await db.query("DELETE FROM courses where id = $1", [id])
            console.log('rows', rows)
            return rows
        } catch (error) {
            console.log('error', error)
        }
    }
}