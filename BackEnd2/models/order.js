const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Order extends Model {}

Order.init({
  cliente: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'O campo cliente é obrigatório.'
      },
      len: {
        args: [3, 255],
        msg: 'O campo cliente deve ter entre 3 e 255 caracteres.'
      }
    }
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'O campo contato é obrigatório.'
      },
      len: {
        args: [3, 100],
        msg: 'O campo contato deve ter entre 3 e 100 caracteres.'
      },
      is: {
        args: /^\(\d{3}\)\s*\d{9}$/,
        msg: 'O formato do contato deve ser "(DDD) XXXXXXXXXXX".'
      }
    }
  },
  descricaoDoProblema: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'O campo descrição do problema é obrigatório.'
      }
    }
  },
  dataAbertura: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    validate: {
      notNull: {
        msg: 'O campo data de abertura é obrigatório.'
      },
      isDate: {
        msg: 'O campo data de abertura deve ser uma data válida.'
      }
    }
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Em aberto', // Definindo valor padrão
    validate: {
      isIn: {
        args: [['Em aberto', 'Finalizado']],
        msg: 'O status deve ser "Finalizado" ou "Em aberto".'
      }
    }
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
    validate: {
      isValidDateOrNull(value) {
        if (value && !Date.parse(value)) {
          throw new Error('O campo data de fechamento deve ser uma data válida.');
        }
      }
    }
  },
  valorTotal: {
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      isFloat: {
        msg: 'O campo Valor Total deve ser um número decimal.'
      }
    }
  }
}, {
  sequelize,
  modelName: 'Order',
});

module.exports = Order;
