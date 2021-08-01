const express = require('express');
const router = express.Router();
const Game = require('../models/game');

router.get('/game', (req, res) => {
  try {
    const games = Game.find();
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