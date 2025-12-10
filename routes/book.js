const express = require('express');
const router = express.Router();

// Import all controllers via index.js
const Controllers = require('../controllers');

router.get('/', Controllers.foodController.getAllBook);

module.exports = router;
