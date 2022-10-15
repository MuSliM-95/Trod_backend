const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

const app = express()


const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use(require('./routes/tokenRouter'))

mongoose.connect(process.env.MONGO)
.then(() => console.log('Сервер MoongooDB подключен'))
.catch((e) => console.log(e.toString(), 'Ошибка'))


app.listen(port, () => {
    console.log(`http://localhost:${port}`); 
}) 