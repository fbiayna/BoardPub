const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Users = require('./src/models/usersModel');
const Establishments = require('./src/models/establishmentsModel');
const Promotions = require('./src/models/promotionsModel');
const mongoUrl = require('./src/utils/dbUrl');
const promotionsRouter = require('./src/routes/promotionsRouter')(Establishments, Promotions);
const userRouter = require('./src/routes/userRouter')(Users);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const dataBaseURL = mongoUrl();
mongoose.connect(dataBaseURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/promotions', promotionsRouter);

app.listen(port, () => (
  debug(`Server is running on port ${chalk.blue(port)}`)));
