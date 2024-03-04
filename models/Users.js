const {Sequelize , DataTypes} = require('sequelize')
const sequelize  = require('../databases/database')

const Users = sequelize.define("Users" ,{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true,
    },
    
    first_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull:true
    },
    
    phone:{
        type: DataTypes.STRING,
        default: +233,
    },
    
    password:{
      type:DataTypes.STRING,

    },

    email:{
        type: DataTypes.STRING,
        default: 'hellogmail.com',

    }
});

sequelize.sync({})
.then( (res)=>{ return res.json()})
.then((data) => console.log(data))
.catch((err) => {console.log(err)});

module.exports = Users;