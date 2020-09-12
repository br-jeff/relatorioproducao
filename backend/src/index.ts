const express = require('express')
const app = express()
const auth = require('./routes/auth')
const authRoutes = require('./Routes/auth')
const port = 3000

app.use(express.json())

app.use('/app/user',authRoutes)

app.listen(port, 
    () => console.log(`Servidor na porta ${port}`))