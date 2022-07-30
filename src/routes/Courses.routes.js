const { Router } = require('express');
const CoursesController = require('../controllers/CoursesController')

const router = Router()

router.get('/courses', CoursesController.listAllCourses);
router.post('/courses/create', CoursesController.createCourse);
router.delete('/courses/delete/:id', CoursesController.deleteCourse);

module.exports = router