const db = require('../config/db');

class Account {
    static async getBalance(userId) {
        const [rows] = await db.query(
            'SELECT SUM(CASE WHEN transaction_type = "deposit" THEN amount ELSE -amount END) as balance FROM Accounts WHERE user_id = ?',
            [userId]
        );
        return rows[0].balance || 0;
    }

    static async getTransactions(userId) {
        const [rows] = await db.query(
            'SELECT * FROM Accounts WHERE user_id = ? ORDER BY transaction_date DESC',
            [userId]
        );
        return rows;
    }

    static async createTransaction(userId, type, amount) {
        const [result] = await db.query(
            'INSERT INTO Accounts (user_id, transaction_type, amount) VALUES (?, ?, ?)',
            [userId, type, amount]
        );
        return result.insertId;
    }

    static async getAllCustomerAccounts() {
        const [rows] = await db.query(`
            SELECT u.id, u.username, u.email, 
                   (SELECT SUM(CASE WHEN transaction_type = 'deposit' THEN amount ELSE -amount END) 
                    FROM Accounts WHERE user_id = u.id) as balance
            FROM Users u
            WHERE u.role = 'customer'
        `);
        return rows;
    }
}

module.exports = Account;
