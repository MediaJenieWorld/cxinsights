const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended", "Cancelled"],
      default: "Active",
    },
    industrySegment: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    organization_SubCategory: {
      type: String,
      required: true,
    },
    insights: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Insight",
        },
      ],
      default: [],
    },

    todo: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Insight",
        },
      ],
      default: [],
    },
    implement: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Insight",
        },
      ],
      default: [],
    },

    liked: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Insight",
        },
      ],
      default: [],
    },

    permissions: {
      type: [String],
      default: [],
    },
    subscription_Manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubscriptionManager",
    },

    active_subscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
  },
  {
    timestamps: true,
    strictPopulate: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
