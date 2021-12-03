const WeatherAudit = require("../entities/weatherAudit");

const insertAudit = async (now, isPrime) => {
  try {
    const weatherAudit = new WeatherAudit({
      isPrime: isPrime,
      timestamp: now,
    });
    await weatherAudit.save();
    console.log("Audit inserted");
  } catch (error) {
    console.log("catch:", error);
  }
};

module.exports = {
  insertAudit,
};
