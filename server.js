const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("<h1>Welcome my Canteen Website project...</h1>");
});

app.get("/website.html", function (req, res) {
  res.sendFile(__dirname + "/website.html");
});
app.get("/menus.html", function (req, res) {
  res.sendFile(__dirname + "/menus.html");
});

app.get("/Aboutus.html", function (req, res) {
  res.sendFile(__dirname + "/Aboutus.html");
});

app.get("/specility.html", function (req, res) {
  res.sendFile(__dirname + "/specility.html");
});

app.get("/website.html", function (req, res) {
  res.sendFile(__dirname + "/website.html");
});

app.get("/facilities.html", function (req, res) {
  res.sendFile(__dirname + "/facilities.html");
});

app.get("/ContactUs.html", function (req, res) {
  res.sendFile(__dirname + "/ContactUs.html");
});

/*app.get("/images", function (req, res) {
  res.sendFile(__dirname + "/images");
});*/

app.get("/style1.css", function (req, res) {
  res.sendFile(__dirname + "/style1.css");
});

/*app.post("/orderBook.html", function (req, res) {
  //res.sendFile(__dirname + "/orderBook.html");
  //console.log("<h1>Your order is successfully confirm....</h1>");
  //res.redirect("/");
});

/*app.post("/orderBook.html", function (res, req) {
  const name = req.body.name;
  const contactno = req.body.contactno;
  const address = req.body.address;
  const amount = req.body.amount;

  console.log("Your order is succesfully confirm....");
});*/

/*app.post("/orderBook", function (res, req) {
  res.redirect("/");
});*/

app.listen(3000, function () {
  console.log("Server is running on port 3000...");
});
