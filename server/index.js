const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const AdminUsers = require('./src/models/adminUsers');
const AdminUsersEstablishments = require('./src/models/adminUsersEstablishments');
const AdminUsersPromotions = require('./src/models/adminUsersPromotions');
const CustomerUsers = require('./src/models/customerUsers');
const CustomerUsersFavorites = require('./src/models/customerUsersFavorites');
const adminRouter = require('./src/routes/adminRouter')(AdminUsers, AdminUsersEstablishments, AdminUsersPromotions);
const customerRouter = require('./src/routes/customerRouter')(CustomerUsers, CustomerUsersFavorites);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const dataBaseURL = process.env.dbURL.trim();

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use('/customer', customerRouter);
app.use('/admin', adminRouter);

app.listen(port, () => (
  debug(`Server is running on port ${chalk.blue(port)}`)));
