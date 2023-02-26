const { STRING } = require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('user',{
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true,
        },
        email:{
            type:DataTypes.STRING(20),
            trim:true,
            unique:true
        },
        password:{
            type:DataTypes.STRING(10),
        },
        lastname:{
            type:DataTypes.STRING(5),
        },
        age:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
    },{
        timestamps:false,
    });
};