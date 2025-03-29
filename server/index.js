require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
const user = require("./routes/userRoutes");
const product = require("./routes/productsRoutes");
const category = require("./routes/categoryRoutes");
const coupon = require("./routes/couponRoutes");
const wishlist = require("./routes/wishlistRoutes");
const order = require("./routes/orderRoutes");
const address = require("./routes/addressRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(express.static(path.join(__dirname, "/uploads")));

// Available Routes
app.use("/api/auth", user);
app.use("/api/product", product);
app.use("/api/cat", category);
app.use("/api/coupon", coupon);
app.use("/api/wishlist", wishlist);
app.use("/api/order", order);
app.use("/api/address", address);
app.get("/", (req, res) => {
    res.send("Ping Successfully :)");
});
app.all("/*", (req, res) => {
    res.status(404).send("404 API Not Exist");
});
app.listen(port, () => {
    console.log(`E-Shop listening on http://localhost:${port}`);
});
