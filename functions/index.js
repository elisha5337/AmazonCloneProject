const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "successfully executed", // Fixed typo
  });
});

app.get("/header", (req, res) => {
  try {
    res.status(600).json({
      info: "this is header of my proj ",
    });
  } catch (err) {
    res.end(err);
    console.log(err);
  }
});
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (!total || isNaN(total) || total <= 0) {
    return res.status(400).json({ error: "Invalid total amount" });
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(200).json(paymentIntent.client_secret);
  } catch (error) {
    logger.error("Payment error:", error);
    res.status(500).json({ error: "Payment processing error" });
  }
});
exports.api = onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
