//importar do banco de dados
import { v4 } from 'uuid'

//id*(gerado no sistema), name, email, password, interests, courses
//schema ou database?

const user = 
{
    id: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    interests: {type: String, required: true},
    courses: {type: String}
}