const mongoose = require("mongoose");

const subscription_Schema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subscriptionManager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subscription_Manager",
    required: true
  },
  plan: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  transactionId: {
    type: String,
    required: true
  },
  endTime: {
    type: Date,
    required: true,
    default: function() {
      return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from current time
    }
  },
  startTime: {
    type: Date,
    required: true,
    default: Date.now
  }
},{timestamps:true});

const Subscription = mongoose.model("Subscription", subscription_Schema);

module.exports = Subscription;
