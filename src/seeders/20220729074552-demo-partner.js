//import {v4} from 'uuid'
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Partners', [{
    partner_id: '1',
    partner_name: 'John Doe',
    cnpj: '123456789-12',
    password: 'password',
    courses: '',
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Partners', null, {});
  }
};
