const express = require('express')
const app = express()
const routes = require('./routes')
const testDB = require('./database/testConnection')
const port = 3000

testDB()


app.use(routes)

app.listen(port, 
    () => console.log(`Servidor na porta ${port}`))