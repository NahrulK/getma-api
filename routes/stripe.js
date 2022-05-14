const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51KyVBgJHCE1fmy6FDKEJmg5EuHK42KRlmURWmC2WuZoFKX2qRKxEjRWfQXtJXfkRHcDJbCy3TFnVUTybD6yDWeTX00T8x6tvm6"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "idr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
