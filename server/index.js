require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const user = require("./routes/userRoutes");
const product = require("./routes/productsRoutes");
const wishlist = require("./routes/wishlistRoutes");
const order = require("./routes/orderRoutes");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Available Routes
app.use("/api/user", user);
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
