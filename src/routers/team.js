const express = require('express');
const router = express.Router();
const Team = require('../models/team');

router.get('/team', (req,res) => {
  res.send('Main team route');
});

module.exports = router;