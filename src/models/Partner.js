'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partner extends Model {
    static associate(models) {
      // define association here
    }
  }
  Partner.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    password: DataTypes.STRING,
    courses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partner',
  });
  return Partner;
};
module.exports = Model


