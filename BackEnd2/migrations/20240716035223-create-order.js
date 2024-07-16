'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente: {
        type: Sequelize.STRING
      },
      contato: {
        type: Sequelize.STRING
      },
      descricaoDoProblema: {
        type: Sequelize.TEXT
      },
      dataAbertura: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      tecnicoResponsavel: {
        type: Sequelize.STRING
      },
      descricaoDoServico: {
        type: Sequelize.TEXT
      },
      dataFechamento: {
        type: Sequelize.DATE
      },
      ValorTotal: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};