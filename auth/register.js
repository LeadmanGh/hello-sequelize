const router = require('express').Router()
const  uuid = require('uuid')
const bcrypt = require('bcrypt')

const User = require("../models/Users")


router.post('/signup',async (req,res) => {
       const {name, email, password, phone } = req.body ;
       //Generating Salt
       const salt = await bcrypt.genSalt(10)
       const hashedPass = await bcrypt.hash(password, salt)
       if(hashedPass){console.log('true')} //Checking for Bcrypt runtime
       else {console.log('bcrypt not working properly')} //Send error to devs
       // Quering data into db
      const user = await User.create({ first_name: name, last_name: name, password:hashedPass, phone:phone, email: email})
      const savedUser = await user.toJSON()
      //Sending response to frontEnd
       res.send(savedUser)   
})




module.exports = router;