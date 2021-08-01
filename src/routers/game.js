const express = require('express');
const router = express.Router();
const Game = require('../models/game');

router.get('/game', async (req, res) => {
  try {
    const games = await Game.find().sort({ date_time_GMT: 'desc' });
    return res.json({
      status: 200,
      data: games
    });
  } catch (e) {
    return res.json({
      status: 400,
      data: 'Oops! There was an error with your search.',
    });
  }
  
});

module.exports = router;