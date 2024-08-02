const express = require("express");
const router = express.Router();
const User = require("../models/User_Customer");
const Insight = require("../models/Insights_model");
// Get all users
router.get("/", async (req, res) => {
  try {
    // const users = await User.find().lean().exec();
    res.json({ data: "GET ALL USERS", success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
});

router.get("/profile", async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId, {
      firstName: 1,
      lastName: 1,
      email: 1,
      phoneNumber: 1,
      status: 1,
      country: 1,
      state: 1,
      city: 1,
      pinCode: 1,
      organization: 1,
      organization_SubCategory: 1,
      industrySegment: 1,
      active_subscription: 1,
    })
      .populate({
        path: "active_subscription",
        select: "endTime plan price startTime",
      })
      .lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ data: user, success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
});

router.get("/counts", async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId, { todo: 1, liked: 1 }).lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const todoLength = user.todo.length;
    const likedLength = user.liked.length;
    res.status(200).json({
      message: "User's todoLength and liked Insights",
      todoLength,
      likedLength,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Server error" });
  }
});

router.get("/myTodos", async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId, { todo: 1 })
      .populate({ path: "todo" })
      .exec();
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({ data: user.todo, success: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
});

router.get("/myImpletements", async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId, { implement: 1 })
      .populate({ path: "implement" })
      .exec();
    // console.log("User", user);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({ data: user.implement, success: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
});

module.exports = router;
