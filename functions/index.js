const {onRequest} = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51PbVtcRtEGRMpbLDAiBUPHdnPoZUPju4VsxU5GcZ2VHkpE4" +
    "6dKWDL4b29TV6sCbVMLixo9DtuximvnJrldvYlmSZ00DetzD1hl",
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen
exports.api = onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-c002b/us-central1/api
