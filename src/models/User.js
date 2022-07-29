import {v4} from 'uuid'

export default class User{
    id;
    name;
    email;
    password;
    interests;
    courses;
    
    constructor(name, email, password, interests, courses){
        this.id = v4(),
        this.name = name,
        this.email = email,
        this.theme = theme,
        this.url = url,
        this.tags = [],
        this.likes = []
    }

    static async like(id){
        this.likes.push(id)
    }

    static async addTags(tag){
        this.tags.push(tag)
    }
    

    static async deslike(id){
        this.likes = this.likes.filter((likeID)=> {return likeID.toLowerCase() !== id.toLowerCase()})
    }

    static async removeTag(tag){
        this.tags = this.tags.filter((tags)=> {return tags.toLowerCase() !== tag.toLowerCase()})
    }
}