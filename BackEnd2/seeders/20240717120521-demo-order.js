'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        cliente: 'Cliente 1',
        contato: '(054) 996075222',
        descricaoDoProblema: 'Problema 1',
        dataAbertura: new Date(),
        status: 'Em andamento',
        tecnicoResponsavel: 'Tecnico 1',
        descricaoDoServico: 'Serviço 1',
        dataFechamento: null,
        ValorTotal: 100.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 2',
        contato: '(054) 996075223',
        descricaoDoProblema: 'Problema 2',
        dataAbertura: new Date(),
        status: 'Finalizado',
        tecnicoResponsavel: 'Tecnico 2',
        descricaoDoServico: 'Serviço 2',
        dataFechamento: new Date(),
        ValorTotal: 200.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 3',
        contato: '(054) 996075224',
        descricaoDoProblema: 'Problema 3',
        dataAbertura: new Date(),
        status: 'Em andamento',
        tecnicoResponsavel: 'Tecnico 3',
        descricaoDoServico: 'Serviço 3',
        dataFechamento: null,
        ValorTotal: 150.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 4',
        contato: '(054) 996075225',
        descricaoDoProblema: 'Problema 4',
        dataAbertura: new Date(),
        status: 'Finalizado',
        tecnicoResponsavel: 'Tecnico 4',
        descricaoDoServico: 'Serviço 4',
        dataFechamento: new Date(),
        ValorTotal: 180.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 5',
        contato: '(054) 996075226',
        descricaoDoProblema: 'Problema 5',
        dataAbertura: new Date(),
        status: 'Em andamento',
        tecnicoResponsavel: 'Tecnico 5',
        descricaoDoServico: 'Serviço 5',
        dataFechamento: null,
        ValorTotal: 120.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 6',
        contato: '(054) 996075227',
        descricaoDoProblema: 'Problema 6',
        dataAbertura: new Date(),
        status: 'Finalizado',
        tecnicoResponsavel: 'Tecnico 6',
        descricaoDoServico: 'Serviço 6',
        dataFechamento: new Date(),
        ValorTotal: 220.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 7',
        contato: '(054) 996075228',
        descricaoDoProblema: 'Problema 7',
        dataAbertura: new Date(),
        status: 'Em andamento',
        tecnicoResponsavel: 'Tecnico 7',
        descricaoDoServico: 'Serviço 7',
        dataFechamento: null,
        ValorTotal: 130.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 8',
        contato: '(054) 996075229',
        descricaoDoProblema: 'Problema 8',
        dataAbertura: new Date(),
        status: 'Finalizado',
        tecnicoResponsavel: 'Tecnico 8',
        descricaoDoServico: 'Serviço 8',
        dataFechamento: new Date(),
        ValorTotal: 240.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 9',
        contato: '(054) 996075230',
        descricaoDoProblema: 'Problema 9',
        dataAbertura: new Date(),
        status: 'Em andamento',
        tecnicoResponsavel: 'Tecnico 9',
        descricaoDoServico: 'Serviço 9',
        dataFechamento: null,
        ValorTotal: 140.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cliente: 'Cliente 10',
        contato: '(054) 996075231',
        descricaoDoProblema: 'Problema 10',
        dataAbertura: new Date(),
        status: 'Finalizado',
        tecnicoResponsavel: 'Tecnico 10',
        descricaoDoServico: 'Serviço 10',
        dataFechamento: new Date(),
        ValorTotal: 260.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
