const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descricaoDoProblema: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dataAbertura: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tecnicoResponsavel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descricaoDoServico: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  dataFechamento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ValorTotal: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
}, {
  tableName: 'Orders',
  timestamps: false,
});

module.exports = Order;
