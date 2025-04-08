const express = require('express');
const router = express.Router();
const { authenticate, isBanker } = require('../middleware/auth');
const accountController = require('../controllers/accountController');

router.get('/transactions', authenticate, accountController.getTransactions);
router.post('/transaction', authenticate, accountController.createTransaction);
router.get('/all', authenticate, isBanker, accountController.getAllAccounts);

module.exports = router;
