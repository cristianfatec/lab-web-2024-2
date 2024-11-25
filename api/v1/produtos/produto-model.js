const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/db');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  categoria: {
    type: DataTypes.STRING,
  },
  marca: {
    type: DataTypes.STRING,
  },
  preco: {
    type: DataTypes.FLOAT,
  },
  quantidadeEstoque: {
    type: DataTypes.INTEGER,
  },
  codigoBarras: {
    type: DataTypes.STRING,
  },
  dimensoes: {
    type: DataTypes.JSON,
  },
  peso: {
    type: DataTypes.JSON,
  },
  status: {
    type: DataTypes.STRING,
  },
  dataCadastro: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'produtos',
  timestamps: false,
});

module.exports = Produto;
