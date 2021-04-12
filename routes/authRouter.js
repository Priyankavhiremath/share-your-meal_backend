const express = require("express");
const router = express.Router();

const { login } = require("../controllers/authController");

const { getMe } = require("../controllers/registerUserController");

const authorize = require("../middlewares/authorizeUser");

router.post("/login", login);
router.get("/me", authorize, getMe);

module.exports = router;
