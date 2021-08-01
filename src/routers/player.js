const express = require('express');
const router = express.Router();

router.get('/player', (req, res) => {
  res.send('Main player route');
});

module.exports = router;