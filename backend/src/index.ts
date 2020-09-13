const express = require('express')
const app = express()
const authRoutes = require('./Routes/authRoutes')
const port = 3000

app.use(express.json())

app.use('/app/user',authRoutes)

app.listen(port, 
    () => console.log(`Servidor na porta ${port}`))