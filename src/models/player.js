const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema ({
  playerId: Number,
  firstName: String,
  LastName: String,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;