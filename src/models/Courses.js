/*import {v4} from 'uuid'

export default class Course{
    id;
    name;
    description;
    url;
    theme;
    photo;
    tags;
    likes;
    constructor(name, description, theme, url){
        this.id = v4(),
        this.name = name,
        this.description = description,
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
*/