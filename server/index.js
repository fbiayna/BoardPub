const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Projects = require('./src/models/projectsModel');
const Collaborators = require('./src/models/collaboratorsModel');
const projectsRouter = require('./src/routes/projectsRouter')(Projects);
const collaboratorsRouter = require('./src/routes/collaboratorsRouter')(Collaborators);
const userRouter = require('./src/routes/userRouter')();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const dataBaseURL = process.env.dbURL.trim();

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use('/projects', projectsRouter);
app.use('/collaborators', collaboratorsRouter);
app.use('/user', userRouter);

app.listen(port, () => (
  debug(`Server is running on port ${chalk.blue(port)}`)));
