const Account = require('../models/Account');

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Account.getTransactions(req.user.id);
        const balance = await Account.getBalance(req.user.id);
        res.json({ transactions, balance });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error: error.message });
    }
};

exports.createTransaction = async (req, res) => {
    try {
        const { type, amount } = req.body;
        
        if (!['deposit', 'withdraw'].includes(type)) {
            return res.status(400).json({ message: 'Invalid transaction type' });
        }
        
        if (amount <= 0) {
            return res.status(400).json({ message: 'Amount must be positive' });
        }

        if (type === 'withdraw') {
            const balance = await Account.getBalance(req.user.id);
            if (amount > balance) {
                return res.status(400).json({ message: 'Insufficient funds' });
            }
        }

        await Account.createTransaction(req.user.id, type, amount);
        const newBalance = await Account.getBalance(req.user.id);
        
        res.json({ 
            message: `${type} successful`,
            balance: newBalance
        });
    } catch (error) {
        res.status(500).json({ message: 'Error processing transaction', error: error.message });
    }
};

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.getAllCustomerAccounts();
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching accounts', error: error.message });
    }
};
