const express = require('express');
const router = express.Router();
const Player = require('../models/player');
const capitalize = require('../utils/capitalize');

router.get('/player', async (req, res) => {
  try {
    const filters = {};
    const sortOptions = {}
    
    if (req.query.lastName) {
      filters.lastName = capitalize(req.query.lastName);
    }

    if (req.query.sortBy) {
      sortOptions[req.query.sortBy] = '';
    }

    if (req.query.order) {
      let key = Object.keys(sortOptions)[0];
      sortOptions[key] = req.query.order;
    }

    const players = await Player.find(filters).sort(sortOptions);
    return res.json({
      status: 200,
      data: players
    });
  } catch (e) {
    return res.json({
      status: 400,
      data: 'Oops! There was an error with your search.',
    });
  }
  
});

module.exports = router;