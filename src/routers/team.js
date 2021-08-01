const express = require('express');
const router = express.Router();
const Team = require('../models/team');

router.get('/team', async (req,res) => {
  let teams = await Team.find({});
  return res.json({
    status: 200,
    data: teams,
  })
});

module.exports = router;