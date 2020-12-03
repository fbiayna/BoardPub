const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Users = require('./src/models/usersModel')
const Establishments = require('./src/models/establishmentsModel')
const Promotions = require('./src/models/promotionsModel')
const adminRouter = require('./src/routes/adminRouter')(Users, Establishments, Promotions)
const customerRouter = require('./src/routes/customerRouter')(Users)

const app = express()
app.use(cors())
const port = process.env.PORT || 5000
const dataBaseURL = 'mongodb+srv://fbiayna:Board_59!73@cluster0.bsyq9.mongodb.net/productDBv1?retryWrites=true&w=majority'
mongoose.connect(dataBaseURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/customer', customerRouter)
app.use('/admin', adminRouter)

app.listen(port, () => (
  debug(`Server is running on port ${chalk.blue(port)}`)))
