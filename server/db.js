const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  port: process.env.PORT,
  database: process.env.DB,
});

try {
  pool.connect();
  console.log("Database Connected Successfully!");
} catch (error) {
  console.error("Unable to Connect to the database:", error);
}

module.exports = pool;
