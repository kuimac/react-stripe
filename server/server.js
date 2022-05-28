const app = require("express")();

const cors = require("cors")

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require("stripe")(process.env.SKTEST);

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