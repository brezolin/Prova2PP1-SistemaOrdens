'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('senha123', 10); // Hash da senha usando bcrypt

    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      password: hashedPassword,
      role: 'admin', // Define um usuário inicial como administrador
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { username: 'admin' }, {});
  }
};