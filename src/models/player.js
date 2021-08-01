const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema ({
  player_id: String,
  firstName: String,
  lastName: String,
  nationality: String,
  birthCity: String,
  primaryPosition: String,
  birthDate: String,
  birthStateProvince: String,
  height: String,
  height_cm: String,
  weight: String,
  shootsCatches: String,
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;