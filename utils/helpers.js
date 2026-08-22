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
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  },

  format_time: (time) => {
    return new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  },
};