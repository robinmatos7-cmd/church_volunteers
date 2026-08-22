const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class VolunteerSignup extends Model {
}

VolunteerSignup.init(
  {
    id: {
      type: DataTypes.INTEGER, ///INTEGER is for numbers, STRING for text.
      allowNull: false, ///allowNull decides if data is required or not. True means not required (can be empty), false means it is required (cannot be empty)
      primaryKey: true,
      autoIncrement: true,
    },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
last_name: {
  type: DataTypes.STRING,
  allowNull: false,
},
phone: {
  type: DataTypes.STRING,
  allowNull: false,
},
email: {
  type: DataTypes.STRING,
  allowNull: false,
},
opportunity_id: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
},
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "volunteer_signup",
  },
);

module.exports = VolunteerSignup;
