const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
        .isLength({ min: 3 })
        .withMessage("first name must be at least 3 characters long"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
]);

module.exports = router;
