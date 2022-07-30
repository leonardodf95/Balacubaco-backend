'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const { Model } = Sequelize
class Course extends Model{
  static init(sequelize) {
    super.init({
      course_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      url: DataTypes.STRING,
      theme: DataTypes.STRING,
      photo: DataTypes.STRING,
      tags: DataTypes.STRING,
      likes: DataTypes.STRING
    }, {
      sequelize,
    })

    return this
  }

  static associate(models) {
    console.log(models)
    // this.belongsTo(models.Partner, { foreignKey: 'partner_id' });
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

module.exports = Course