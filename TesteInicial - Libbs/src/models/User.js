const { DataTypes } = require("sequeliza");
const sequelize = require("../config/config")

const User = sequelize.define('user',{
    nome:{
        type DataTypes.STRING,
        allowNull: false
    },
    email:{
        Type: DataTypes.STRING
        allowNull:false
    },

    senha:{
        type: DataTypes.STRING
        allowNull:false
    },
});
module.exports = user;