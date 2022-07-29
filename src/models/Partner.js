//importar do banco de dados


/*const partner = 
{
    id: {type: String, required: true},
    name: {type: String, required: true},
    cnpj: {type: Number, required: true},
    password: {type: String, required: true},
    courses: {type: String}
}*/

import { v4 } from 'uuid'

export default class Partner{
    id;
    name;
    cnpj;
    password;
    courses;
    
    constructor(name, description, theme, url){
        this.id = v4(),
        this.name = name,
        this.cnpj = cnpj,
        this.password = password,
        this.courses = courses
    }

}