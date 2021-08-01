const express = require('express');
const router = express.Router();
const Game = require('../models/game');

router.get('/game', (req, res) => {
  res.send('Main game route');
});

module.exports = router;