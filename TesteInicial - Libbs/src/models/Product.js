const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Product = sequelize.define('produtos', {
    nome: {
        Type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        Type: DataTypes.DOUBLE,
        allowNull: false
    },
    quantidade: {
        Type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Product;