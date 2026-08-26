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
      },
      defaults: opportunity,
    });
  }

  for (const signup of signupData) {
    await VolunteerSignup.findOrCreate({
      where: {
        email: signup.email,
        opportunity_id: signup.opportunity_id,
      },
      defaults: signup,
    });
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.findOrCreate({
    where: {
      email: "admin@example.com",
    },
    defaults: {
      password: hashedPassword,
    },
  });
};

module.exports = seedDatabase;
