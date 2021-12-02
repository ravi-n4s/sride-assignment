const mongoose = require("mongoose");

const WeatherAuditSchema = mongoose.Schema({
  timestamp: {
    type: String,
    required: true,
    minLength: 1,
  },
  isPrime: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("weatherAudit", WeatherAuditSchema);
