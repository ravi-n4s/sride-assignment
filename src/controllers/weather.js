const express = require("express");
const router = express.Router();
// const customInstance = require("./../config/axios");
const axios = require("axios");
const { insertAudit } = require("./../operations/insertAudit");
const { isPrime } = require("./../helpers");
const constants = require("../config/constants");

router.get("/", (req, res) => {
  let city = extractAndValidateCity(req);
  now = new Date();
  isDatePrime = isPrime(now.getDate());
  if (isDatePrime) {
    axios
      .get(constants.URL + "?q=" + city + "&appId=" + process.env.API_KEY)
      .then((response) => {
        insertAudit(now, true).then(() => {
          res.status(200).json(response.data);
        });
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  } else {
    insertAudit(now, false).then(() => {
      res.status(200).json({
        status: false,
        message: "Date is not prime so no data",
      });
    });
  }
});

const extractAndValidateCity = (req) => {
  city = constants.defaultCity; //defaults to london if no city is provided
  cityToValidate = req.query.city;
  if (
    cityToValidate !== undefined &&
    cityToValidate !== null &&
    cityToValidate !== ""
  ) {
    city = cityToValidate;
  }
  return city;
};

module.exports = router;
