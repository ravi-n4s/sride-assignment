const { insertAudit } = require("./../operations/insertAudit");

isDatePrimeMiddleware = async (req, res, next) => {
  const d = new Date();
  let n = d.getDate();
  if (n === 1) {
    insertAudit(false);
    return res.status(200).json({
      status: false,
      message: "Date is not prime so no data",
    });
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      insertAudit(false);
      return res.status(200).json({
        status: false,
        message: "Date is not prime so no data",
      });
    }
  }
  next();
};

module.exports = isDatePrimeMiddleware;
