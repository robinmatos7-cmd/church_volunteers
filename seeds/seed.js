const sequelize = require("../config/connection");

const { VolunteerOpportunity, VolunteerSignup, User } = require("../models");

const opportunityData = require("./opportunityData.json");

const signupData = require("./signupData.json");

const bcrypt = require("bcrypt");

const seedDatabase = async () => {
  await sequelize.sync();
  const opportunityCount = await VolunteerOpportunity.count();
  if (opportunityCount > 0) {
  return;
}

  await VolunteerOpportunity.bulkCreate(opportunityData, {
    individualHooks: true,
    returning: true,
  });

  await VolunteerSignup.bulkCreate(signupData, {
    returning: true,
  });

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    email: "admin@example.com",
    password: hashedPassword,
  });
};

seedDatabase().catch((err) => {
  console.error(err);
});
