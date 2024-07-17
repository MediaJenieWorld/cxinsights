const mongoose = require("mongoose")

const test_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    subscription_Manager:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"SubscriptionManager"
    },

    active_subscription:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Subscription"
    },
})
const Test = mongoose.model("Test",test_Schema)
module.exports = Test