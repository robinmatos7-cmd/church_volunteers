const sequelize = require("../config/connection");

const { VolunteerOpportunity, VolunteerSignup, User } = require("../models");

const opportunityData = require("./opportunityData.json");

const signupData = require("./signupData.json");

const bcrypt = require("bcrypt");

const seedDatabase = async () => {
  await sequelize.sync();

  for (const opportunity of opportunityData) {
  await VolunteerOpportunity.findOrCreate({
    where: {
      role: opportunity.role,
      date: opportunity.date,
    },
    defaults: opportunity,
  });
}

  await VolunteerSignup.bulkCreate(signupData, {
    returning: true,
  });

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    email: "admin@example.com",
    password: hashedPassword,
  });
};

module.exports = seedDatabase;
