/**
 * Ajilore Raphael Olamide < reaphealolams@gmail.com >
 * Right reserved   
*/
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const transformResponse = require('./utils/transformer').transformResponse


const app = express();
const routes = require('./routes/index')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

//Set some headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type");
  next()
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status).json(transformResponse(0, "Unauthorized"))
});

module.exports = app;
