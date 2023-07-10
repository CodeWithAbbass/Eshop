// const path = require('path');
const multer = require("multer");
const path = require("path");
let Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
    // cb(null, path.join(__dirname, "..", "/uploads"));
  },

  filename: (req, file, cb) => {
    // let ext = path.extname(file.originalname);
    // cb(null, Date.now() + ext);      // For Random Name.
    cb(null, file.originalname); // For Original Name.
  },
});

const upload = multer({
  storage: Storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      console.log("Only jpeg, jpg or png file supported");
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = upload;
