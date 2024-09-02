const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Middleware for logging request body
const logRequestBody = (req, res, next) => {
  console.log(`POST ${req.originalUrl}:`, req.body); // Log URL and request body
  next(); // Continue to the controller
};

// Route for registration with logging
router.post('/register', logRequestBody, register);

// Route for login with logging
router.post('/login', logRequestBody, login);

module.exports = router;
