const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/player', async (req, res) => {
  const players = await Player.find({});
  return res.json({
    status: 200,
    data: players
  });
});

module.exports = router;