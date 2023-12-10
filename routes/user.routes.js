const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Define routes for user operations
router.post('/create', UserController.createUser);
router.get('/:userId', UserController.getUserById);
// Add more routes as needed

module.exports = router;
