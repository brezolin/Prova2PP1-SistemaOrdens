'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        cliente: 'Cliente 1',
        contato: 'Contato 1',
        descricaoDoProblema: 'Problema 1',
        dataAbertura: new Date(),
        status: 'Em andamento',
        tecnicoResponsavel: 'Tecnico 1',
        descricaoDoServico: 'Serviço 1',
        dataFechamento: null,
        ValorTotal: 100.0,
        createdAt: new Date(), // Adicione createdAt
        updatedAt: new Date(), // Adicione updatedAt
      },
      {
        cliente: 'Cliente 2',
        contato: 'Contato 2',
        descricaoDoProblema: 'Problema 2',
        dataAbertura: new Date(),
        status: 'Finalizado',
        tecnicoResponsavel: 'Tecnico 2',
        descricaoDoServico: 'Serviço 2',
        dataFechamento: new Date(),
        ValorTotal: 200.0,
        createdAt: new Date(), // Adicione createdAt
        updatedAt: new Date(), // Adicione updatedAt
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
