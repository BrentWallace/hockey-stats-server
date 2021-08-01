const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
  team_id: String,
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
