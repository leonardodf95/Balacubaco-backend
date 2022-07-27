import {Router} from 'express'

const courses = Router()


courses.get('/', async(request, response)=>{
    const curso = {
        id: 'asdasd',
        nome: 'asdasd'
    }
    return response.send(curso).status(200)
})

export default courses