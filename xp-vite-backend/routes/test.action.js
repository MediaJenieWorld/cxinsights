const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    res.send("Hii");
  } catch (error) {
    res.send("error");
  }
});

module.exports = router;
