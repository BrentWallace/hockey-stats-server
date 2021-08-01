const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/player', async (req, res) => {
  try {
    const players = await Player.find();
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