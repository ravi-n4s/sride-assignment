const express = require("express");
const router = express.Router();
// const customInstance = require("./../config/axios");
const axios = require("axios");
const { insertAudit } = require("./../operations/insertAudit");
const constants = require("../config/constants");

router.get("/", (req, res) => {
  axios
    .get(constants.URL + "&appId=" + process.env.API_KEY)
    .then((response) => {
      insertAudit(true);
      return res.json(response.data);
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
});

module.exports = router;
