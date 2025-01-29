'use strict';

const express = require('express');
const router = express.Router();

const weathers = {
  'Seoul': {
    city: 'Seoul',
    weather: {
      description: 'Cloudy',
    },
    main: {
      temp: 14.5,
    },
  },
  'Washington': {
    city: 'Washington',
    weather: {
      description: 'Sunny',
    },
    main: {
      temp: 20.5,
    },
  },
};

router.get('/v1/weather', (req, res, next) => {
  const { city } = req.query;
  
  if (!city || city.length < 1) {
    return next(new Error('city is required'));
  }
  
  const weatherInfo = weathers[city];
  if (!weatherInfo) {
    return res.status(404).json({
      message: 'No weather found',
    });
  }
  
  return res.status(200).json({
    ...weatherInfo,
  });
});

exports.router = router;