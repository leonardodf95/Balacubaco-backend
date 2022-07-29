//importar do banco de dados

//id*(gerado no sistema), name, email, password, interests, courses
//schema ou database?

/*const user = 
{
    id: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    interests: {type: String, required: true},
    courses: {type: String}
}*/

import { v4 } from 'uuid'

export default class User{
    id;
    name;
    email;
    password;
    ///interests;
    //courses;
    
    constructor(name, description, theme, url){
        this.id = v4(),
        this.name = name,
        this.email = email,
        this.password = password
        //this.interests = this.interests;
        //this.courses = courses
    }

    static like(id){
        this.likes.push(id)
    }

    static addTags(tag){
        this.tags.push(tag)
    }
    static deslike(id){
        this.likes = this.likes.filter((likeID)=> {return likeID.toLowerCase() !== id.toLowerCase()})
    }

    static removeTag(tag){
        this.tags = this.tags.filter((tags)=> {return tags.toLowerCase() !== tag.toLowerCase()})
    }
}