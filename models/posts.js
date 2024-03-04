const { Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../databases/database')

const Post = new sequelize.define('Post', {
    user_id:{
       type: DataTypes.INTEGER,
       allowNull: false
      },
      post_title:{
        type: DataTypes.STRING,
    },
    
     post_body:{
        type: DataTypes.STRING
    }
})

 sequelize.sync({force:true})
 .then((res) => res.json)
 .then((info => {console.log(info)}))

module.exports= Post