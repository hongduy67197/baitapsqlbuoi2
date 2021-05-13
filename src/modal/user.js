const sequelize = require("../config/sql-connection");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
    "User",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        username:{
            type: DataTypes.STRING,
            allowNull:false,            
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,            
        },
        fullname:{
            type: DataTypes.STRING,
            allowNull:false,            
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,            
        },
        age:{
            type: DataTypes.INTEGER},
            address:DataTypes.STRING,            
        },
        {
            freeTableName:true,
        }
)
module.exports = User;