
const express = require("express")
const app = express();
const login = require('./auth/login')
const signup = require('./auth/register')
const postRoute = require('./route-methods/post')

const port = 3000;
//Middleware
app.use(express.json())
//Middleware Routes
app.use('/api/user', login)
app.use('/api/user', signup)

app.use('/api/post', postRoute)




app.listen(port ,() => console.log("its working man"))
