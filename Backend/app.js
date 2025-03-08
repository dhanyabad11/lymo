const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    console.log("Root route hit"); // Debug log
    res.send("hello world");
});

// Debug middleware to confirm router is loaded
app.use(
    "/users",
    (req, res, next) => {
        console.log(`Request to /users${req.path}`); // Log all /users requests
        next();
    },
    userRoutes
);

module.exports = app;
