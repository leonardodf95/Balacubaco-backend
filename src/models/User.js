'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    interests: DataTypes.STRING,
    courses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

/*module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    interests: DataTypes.STRING,
    courses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',});
  User.associate = function(models){};
  return User;
};*/
