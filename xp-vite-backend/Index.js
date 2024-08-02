const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.action");
const insightRoutes = require("./routes/insight.action");
const authRoute = require("./routes/auth.action");
const subscriptionRoute = require("./routes/subscription.action");
const customer_Profile_Route = require("./routes/Customer_Profile.action");
const testRoute = require("./routes/test.action");

const extractToken = require("./utils/middleware");

require("dotenv").config();

const app = express();
const port = 5055;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const cloudUrl = process.env.CLOUD_URL;
const localUrl = process.env.LOCAL_URL;

const dbUrl = cloudUrl;

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error.message);
});
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// API Routes
app.use("/auth", authRoute);
app.use("/Zensight/users", extractToken, userRoutes);
app.use("/Zensight/insights", extractToken, insightRoutes);
app.use("/subscription", extractToken, subscriptionRoute);
app.use("/Clueberry", extractToken, customer_Profile_Route);
app.use("/test", extractToken, testRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, this is your Xperiento server!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
