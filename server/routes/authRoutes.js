const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");
const { authenticateUser } = require("../middleware/authentication");

router.post("/register", register);
router.post("/verify-email", verifyEmail);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.delete("/logout", authenticateUser, logout);

module.exports = router;
