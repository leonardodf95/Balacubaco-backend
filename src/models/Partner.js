'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const { Model } = Sequelize
class Partner extends Model{
  static init(sequelize) {
    super.init({
      partner_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      partner_name: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      password: DataTypes.STRING,
      courses: DataTypes.STRING
    }, {
      sequelize
    })

    return this
  }

  static associate(models) {
    // define association here
  }
}

module.exports = Partner

