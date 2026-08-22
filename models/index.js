const VolunteerOpportunity = require("./VolunteerOpportunity");

const VolunteerSignup = require("./VolunteerSignup");

const User = require("./User");

VolunteerOpportunity.hasMany(VolunteerSignup, {
  foreignKey: "opportunity_id",
});

VolunteerSignup.belongsTo(VolunteerOpportunity, {
  foreignKey: "opportunity_id",
});

module.exports = { VolunteerOpportunity, VolunteerSignup, User };