const express = require('express');
const router = express.Router();
const Team = require('../models/team');

router.get('/team', async (req,res) => {
  try {
    const teams = await Team.find().sort({ shortName: 'asc' });
    return res.json({
      status: 200,
      data: teams,
    });
  } catch (e) {
    return res.json({
      status: 400,
      data: 'Oops! There was an error with your search.',
    })
  }
  
});

module.exports = router;