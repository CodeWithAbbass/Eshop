require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = 5000;
const user = require("./routes/userRoutes");
const product = require("./routes/productsRoutes");
const wishlist = require("./routes/wishlistRoutes");
const order = require("./routes/orderRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.static(path.join(__dirname, "/uploads")));

// Available Routes
app.use("/api/auth", user);
app.use("/api/product", product);
app.use("/api/wishlist", wishlist);
app.use("/api/order", order);
app.get("/", (req, res) => {
  res.send("Ping Successfully :)");
});
app.all("/*", (req, res) => {
  res.status(404).send("404 Page Not Found");
});
app.listen(port, () => {
  console.log(`E-Shop listening on http://localhost:${port}`);
});
