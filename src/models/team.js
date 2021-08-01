const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
  team_id: String,
  franchiseId: String,
  shortName: String,
  teamName: String,
  abbreviation: String,
  link: String,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
