const express = require('express');
const router = express.Router();

// Import controller
const expenseController = require ('../controllers/expenseController');

// i.e Root: GET /api/example
router.get('/expense', expenseController.getExample);

module.exports = router;