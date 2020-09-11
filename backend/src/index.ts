const express = require('express')
const app = express()
const auth = require('./routes/auth')
//const testDB = require('./Database/Config/testConnection')
const port = 3000
const Users = require('./Database/Models/User')

//testDB()

app.use('/user',auth)


app.listen(port, 
    () => console.log(`Servidor na porta ${port}`))