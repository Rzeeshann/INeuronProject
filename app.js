const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
const sequelize = require('./util/database')
const userRoute = require('./routes/user')

app.use(cors())
app.use(bodyparser.json())
app.use(userRoute)

const User = require('./models/user')


sequelize.sync()
.then(res => {
    app.listen(3000)
})
.catch(err =>{
    console.log(err);
})


