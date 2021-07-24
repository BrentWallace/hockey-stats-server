const express = require('express');
const router = express.Router();

router.get('/game', (req, res) => {
  res.send('Main game route');
});

module.exports = router;