const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class VolunteerOpportunity extends Model {
}

VolunteerOpportunity.init(
  {
    id: {
      type: DataTypes.INTEGER, ///INTEGER is for numbers, STRING for text.
      allowNull: false, ///allowNull decides if data is required or not. True means not required (can be empty), false means it is required (cannot be empty)
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "volunteer_opportunity",
  },
);

module.exports = VolunteerOpportunity;
