'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const { Model } = Sequelize
class User extends Model{
  static init(sequelize) {
    super.init({
      user_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      interests: DataTypes.STRING,
      courses: DataTypes.STRING
    }, {
      sequelize,
    })

    return this
  }

  static associate(models) {
    console.log(models)
    // this.belongsTo(models.Partner, { foreignKey: 'partner_id' });
  }
}

module.exports = User