'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partners extends Model {
    static associate(models) {
      // define association here
    }
  }
  Partners.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    password: DataTypes.STRING,
    courses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partners',
  });
  return Partners;
};
module.exports = Model


