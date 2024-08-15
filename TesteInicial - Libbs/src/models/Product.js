const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Product = sequelize.define('produtc',{
    nome:{
        Type: DataTypes.STRING,
        allowNull: false
    },
    preco:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Product;