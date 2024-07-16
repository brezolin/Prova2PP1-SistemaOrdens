'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    cliente: DataTypes.STRING,
    contato: DataTypes.STRING,
    descricaoDoProblema: DataTypes.TEXT,
    dataAbertura: DataTypes.DATE,
    status: DataTypes.STRING,
    tecnicoResponsavel: DataTypes.STRING,
    descricaoDoServico: DataTypes.TEXT,
    dataFechamento: DataTypes.DATE,
    ValorTotal: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};