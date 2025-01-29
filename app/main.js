'use strict';

const express = require('express');
const { router: weatherRouter } = require('./weather/weather.controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(weatherRouter);

app.use((err, req, res, next) => {
  return res.status(400).json({
    code: err.status,
    message: err.message,
  });
});

exports.app = app;
