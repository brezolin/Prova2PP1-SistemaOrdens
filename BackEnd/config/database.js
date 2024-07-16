

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ordem_servico', 'root', '0000', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
