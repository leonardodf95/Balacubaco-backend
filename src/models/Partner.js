//importar do banco de dados
import { v4 } from 'uuid'

//id*(gerado no sistema), name, cnpj, password, courses

const partner = 
{
    id: {type: String, required: true},
    name: {type: String, required: true},
    cnpj: {type: Number, required: true},
    password: {type: String, required: true},
    courses: {type: String}
}