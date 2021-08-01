const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema ({
  game_id: String,
  season: String,
  type: String,
  date_time_gmt: String,
  away_team_id: String,
  home_team_id: String,
  away_goals: String,
  home_goals: String,
  outcome: String,
  home_rink_side_start: String,
  venue: String,
  venue_link: String,
  venue_time_zone_id: String,
  venue_time_zone_offset: String,
  venue_time_zone_tz: String,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;