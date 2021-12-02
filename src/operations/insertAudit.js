const WeatherAudit = require("../entities/weatherAudit");

const insertAudit = async (isPrime) => {
  try {
    const weatherAudit = new WeatherAudit({
      isPrime: isPrime,
      timestamp: new Date().toISOString(),
    });
    await weatherAudit.save();
  } catch (error) {
    console.log("catch:", error);
  }
};

module.exports = {
  insertAudit,
};
