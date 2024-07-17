const express = require("express");
const router = express.Router();
const Test = require("../models/Test_Model");
const Subscription_Manager = require("../models/Subscription_manager");
const Subscription = require("../models/Subscription");
const newUser_with_subscription = require("../utils/newUser_with_Subscription");
const User = require("../models/User_Customer");
const jwt = require("jsonwebtoken");
const encodeKey = process.env.ENCODE_KEY;

router.get("/", async (req, res) => {
  try {
    const test = await Test.find();
    const user = await User.findOne({ firstName: "kartik" });
    const subsMana = await Subscription_Manager.find();
    const subs = await Subscription.find();

    res.json({
      user,
      test,
      subsMana,
      subs,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/user/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const user = await User.find({ firstName: name });
    res.json({
      name,
      user,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/user/:id/delete", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.deleteOne({ _id: id });
    res.json({
      user,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/new", async (req, res) => {
  try {
    const user = await newUser_with_subscription(
      payload,
      undefined,
      User,
      Subscription_Manager,
      Subscription
    );

    delete user.password;

    const token = jwt.sign({ user }, encodeKey, {
      expiresIn: "5d",
    });

    res.json({ success: true, data: user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/deleteAll", async (req, res) => {
  try {
    const test = await Test.deleteMany({});
    const subsMana = await Subscription_Manager.deleteMany({});
    const subs = await Subscription.deleteMany({});
    res.json({
      test,
      subsMana,
      subs,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/old", async (req, res) => {
  try {
    // let user = await Insight.find();

    res.json({ message: "Test Api", data: "Testing Api" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Server error" });
  }
});

module.exports = router;
