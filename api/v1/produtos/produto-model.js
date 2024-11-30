const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    codeBar: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dimension: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    weight: {
        type: Sequelize.JSON,
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    Sequelize,
    modelName: 'produto',
    tableName: 'produto',
    timestamps: true,
});

module.exports = {Produto}