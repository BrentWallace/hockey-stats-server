const express = require('express');
const router = express.Router();

router.get('/team', (req,res) => {
  res.send('Main team route');
});

module.exports = router;