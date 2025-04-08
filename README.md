# Simple Banking System

A full-stack banking application built with Vue.js, Node.js, and MySQL.

## Features

- User Authentication (Customers and Bankers)
- Transaction Management (Deposits and Withdrawals)
- Real-time Balance Tracking
- Account Overview for Bankers
- Secure JWT Authentication
- Responsive UI Design

## Tech Stack

- **Frontend**: Vue.js with Vuex and Vue Router
- **Backend**: Node.js with Express
- **Database**: MySQL
- **Architecture**: MVC (Model-View-Controller)

## Project Structure

```
BankingSystem/
├── backend/                  # Node.js backend (API)
│   ├── config/              # Database configuration
│   ├── controllers/         # Request handlers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Auth middleware
│   └── server.js           # Entry point
├── frontend/               # Vue.js frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── views/         # Page components
│   │   ├── router/        # Vue Router config
│   │   ├── store/         # Vuex store
│   │   └── App.vue        # Root component
│   └── public/            # Static assets
└── database/              # SQL scripts
```

## Deployment

- Frontend: https://simple-banking-system-vue.windsurf.build
- Backend API: https://simple-banking-system-api.windsurf.build

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshpandey2165/enp2.git
   cd enp2/BankingSystem
   ```

2. Setup Backend:
   ```bash
   cd backend
   npm install
   # Create .env file with necessary environment variables
   npm start
   ```

3. Setup Frontend:
   ```bash
   cd frontend
   npm install
   npm run serve
   ```

4. Setup Database:
   - Import the SQL script from `database/setup.sql`
   - Configure database connection in backend `.env` file

## Environment Variables

Backend `.env` configuration:
```
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=Bank
JWT_SECRET=your_jwt_secret
PORT=5000
```

## API Endpoints

- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login
- GET `/api/accounts/transactions` - Get user transactions
- POST `/api/accounts/transaction` - Create new transaction
- GET `/api/accounts/all` - Get all accounts (banker only)

## Security Features

- Password Hashing
- JWT Authentication
- CORS Protection
- Input Validation
- Secure Environment Variables
