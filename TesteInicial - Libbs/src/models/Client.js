const {DataTypes} = require("sequelize");
const sequelize = require("../config/config");
const Client = sequelize.define('cliente', {
    nome:{
        type:DataTypes.STRING,
        allowNull: false
    },
    idade:{
        type:DataTypes.STRING,
        allowNull: false
    },
    rg:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cpf:{
        type:DataTypes.STRING,
        allowNull:false
    },
    endereco:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    },
});

module.exports = Client;