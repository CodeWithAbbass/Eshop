require("dotenv").config(); // This should be on top so pool can use it.
const express = require("express");
const pool = require("./db");
const app = express();
const port = 5000;
const cors = require("cors");
const user = require("./routes/userRoutes");
const products = require("./routes/productsRoutes");
const admin = require("./routes/adminRoutes");
const cookieParser = require("cookie-parser");

///----These 2 lines are used to show the post req body or else it will show empty while printing -----
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///----------------------------------------------------------------------------------------------------

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://gemlifestyles.com');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });
/// ----------------------------------
/// -----------REQUEST----------------
/// ----------------------------------

// Available Routes
app.use("/api/admin", admin);
app.use("/api/user", user);
app.use("/api/products", products);

// Testing Route
app.get("/", (req, res) => {
  res.send("Ping Successfully :)");
});

app.all("/*", (req, res) => {
  res.status(404).send("Forbidden");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
