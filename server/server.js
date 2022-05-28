const app = require("express")();
const stripe = require("stripe")("sk_test_51L4HMKA3AbvkM4bV3ivVGMb6G3aV1nE3YlkMAmsSEkZnrcatIFLfPGzEBhz33OM9k3w1aOKnWMoQqL8hQdvv3fda00Cb8H2TjB");
const cors = require("cors")

app.use(require("body-parser").text());
app.use(cors())

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "jpy",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listenig on port 9000"));