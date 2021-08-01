const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/player', (req, res) => {
  res.send('Main player route');
});

module.exports = router;