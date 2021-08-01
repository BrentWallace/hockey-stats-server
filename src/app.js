const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

const gameRoutes = require('./routers/game');
const playerRoutes = require('./routers/player');
const teamRoutes = require('./routers/team');

app.use(gameRoutes);
app.use(playerRoutes);
app.use(teamRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
