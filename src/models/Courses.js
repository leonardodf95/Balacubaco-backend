import {v4} from 'uuid'

class Course{
    id;
    name;
    description;
    theme;
    photo;
    tags;
    likes;
    constructor(name, description, theme){
        this.id = v4(),
        this.name = name,
        this.description = description,
        this.theme = theme,
        this.tags = [],
        this.likes = []
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