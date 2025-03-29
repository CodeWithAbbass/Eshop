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

// Function to create the address table
const createAddressTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS address (
      aid VARCHAR(255) PRIMARY KEY,
      uid VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(255),
      address TEXT NOT NULL,
      shippingaddress BOOLEAN DEFAULT FALSE,
      billingaddress BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (uid) REFERENCES users(uid) ON DELETE CASCADE
    );
  `;

    try {
        await pool.query(createTableQuery);
        console.log("Address table created successfully.");
    } catch (error) {
        console.error("Error creating address table:", error.message);
    }
};

// Function to create the category table
const createCategoryTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS category (
      cid VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      count INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    try {
        await pool.query(createTableQuery);
        console.log("Category table created successfully.");
    } catch (error) {
        console.error("Error creating category table:", error.message);
    }
};

// Function to create the coupon table
const createCouponTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS coupon (
      cid VARCHAR(255) PRIMARY KEY,
      coupon_code VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      discount_type VARCHAR(50),
      coupon_amount DECIMAL(10, 2) NOT NULL,
      coupon_expiry TIMESTAMP NOT NULL,
      free_shipping BOOLEAN DEFAULT FALSE,
      minimum_spend DECIMAL(10, 2) DEFAULT 0,
      maximum_spend DECIMAL(10, 2) DEFAULT 0,
      individual_use_only BOOLEAN DEFAULT FALSE,
      exclude_sale_item BOOLEAN DEFAULT FALSE,
      limit_per_coupon INTEGER DEFAULT 1,
      limit_per_user INTEGER DEFAULT 1,
      include TEXT,
      exclude TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    try {
        await pool.query(createTableQuery);
        console.log("Coupon table created successfully.");
    } catch (error) {
        console.error("Error creating coupon table:", error.message);
    }
};

// Function to create the orders table
const createOrdersTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
      orderid VARCHAR(255) PRIMARY KEY,
      userid VARCHAR(255) NOT NULL,
      status VARCHAR(50) NOT NULL,
      shipaddress TEXT NOT NULL,
      billaddress TEXT NOT NULL,
      paymentmethod VARCHAR(50) NOT NULL,
      products TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    try {
        await pool.query(createTableQuery);
        console.log("Orders table created successfully.");
    } catch (error) {
        console.error("Error creating orders table:", error.message);
    }
};

// Function to create the products table
const createProductsTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
      uid VARCHAR(255) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      sku VARCHAR(100) NOT NULL UNIQUE,
      rating DECIMAL(3, 2),
      price DECIMAL(10, 2) NOT NULL,
      discount DECIMAL(10, 2) DEFAULT 0,
      stock TEXT NOT NULL,
      saleprice DECIMAL(10, 2),
      saleschedule TEXT,
      shipfee DECIMAL(10, 2) DEFAULT 0,
      stockmanagement BOOLEAN DEFAULT FALSE,
      maxquantity TEXT DEFAULT 1,
      allowbackorder BOOLEAN DEFAULT FALSE,
      stockstatus VARCHAR(50),
      brand VARCHAR(100),
      attributes TEXT,
      category TEXT,
      smalldesc TEXT,
      description TEXT,
      tags TEXT,
      images TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    try {
        await pool.query(createTableQuery);
        console.log("Products table created successfully.");
    } catch (error) {
        console.error("Error creating products table:", error.message);
    }
};

// Function to create the users table
const createUsersTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      uid VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      phone VARCHAR(20) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'user',
      avatar TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    try {
        await pool.query(createTableQuery);
        console.log("Users table created successfully.");
    } catch (error) {
        console.error("Error creating users table:", error.message);
    }
};

// Function to create the wishlist table
const createWishlistTable = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS wishlist (
      uid VARCHAR(255) PRIMARY KEY,
      userid VARCHAR(255) NOT NULL,
      wishitem JSONB NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userid) REFERENCES users(uid) ON DELETE CASCADE
    );
  `;

    try {
        await pool.query(createTableQuery);
        console.log("Wishlist table created successfully.");
    } catch (error) {
        console.error("Error creating wishlist table:", error.message);
    }
};

const InitialTables = async () => {
    await createProductsTable();
    await createUsersTable();
    await createOrdersTable();
    await createCouponTable();
    await createAddressTable();
    await createCategoryTable();
    await createWishlistTable();
};
InitialTables();
module.exports = pool;
