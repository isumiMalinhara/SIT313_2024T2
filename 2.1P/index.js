const express = require("express");
const bodyParser = require("body-parser");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 3000;
const domainMg = process.env.MAILGUN_DOMAIN;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/subscribe", (req, res) => {
  const email = req.body.email;

  mg.messages
    .create(domainMg, {
      from: "Dev@Deakin <no-reply@sandbox1b95365a87a14b77a62d5657400b2f0a.mailgun.org>",
      to: [email],
      subject: "Welcome to DEV@Deakin",
      text: "Thank you for subscribing to DEV@Deakin!",
      html: "<h1>Welcome to DEV@Deakin</h1><p>Thank you for subscribing to our platform!</p>",
    })
    .then((msg) => {
      console.log(msg);
      res.send("Welcome email sent!");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error sending email");
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
