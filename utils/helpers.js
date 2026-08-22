module.exports = {
  get_emoji: (role) => {
    if (role === "Usher") {
      return "🚪";
    } else if (role === "Children Sunday School Teacher") {
      return "📚";
    } else if (role === "Media and Production Team") {
      return "🎥";
    } else if (role === "Parking Lot Staff") {
      return "🚗";
    } else if (role === "Pre-service and Post-service accomodations") {
      return "🧹";
    } else if (role === "Connection Center Greeters") {
      return "👋";
    }

    return "🤝";
  },

  format_date: (date) => {
    return date.toString().slice(0, 10);
  },
};