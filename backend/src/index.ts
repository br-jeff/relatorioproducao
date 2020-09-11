const express = require('express')
const app = express()
const auth = require('./routes/auth')
//const testDB = require('./Database/Config/testConnection')
const port = 3000


//testDB()

app.use('/user',auth)

app.use(express.json())


app.listen(port, 
    () => console.log(`Servidor na porta ${port}`))