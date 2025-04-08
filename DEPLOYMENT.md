# Deployment Guide for Banking System

This guide explains how to deploy the Banking System on Render.com.

## Prerequisites

1. Create a Render.com account
2. Have a MySQL database ready (you can use Render's managed MySQL or external service)

## Deployment Steps

1. **Fork/Clone the Repository**
   ```bash
   git clone https://github.com/Harshpandey2165/enp2.git
   cd enp2/BankingSystem
   ```

2. **Set Up Database**
   - Create a MySQL database named 'Bank'
   - Import the schema from `database/setup.sql`
   - Note down your database credentials

3. **Deploy on Render.com**
   
   a. Go to your Render Dashboard
   b. Click "New +" and select "Blueprint"
   c. Connect your GitHub repository
   d. Render will automatically detect the `render.yaml` configuration
   e. Set up the following environment variables for the backend service:
      - `DB_HOST`: Your MySQL host
      - `DB_USER`: Database username
      - `DB_PASSWORD`: Database password
      - `DB_NAME`: Bank
      - `JWT_SECRET`: Will be auto-generated
      - `NODE_ENV`: production
      - `PORT`: 8080

4. **Verify Deployment**
   - Backend API will be available at: https://banking-system-api.onrender.com
   - Frontend will be available at: https://banking-system-frontend.onrender.com

## Post-Deployment

1. Test the application by:
   - Creating a new account
   - Logging in
   - Making test transactions
   
2. Monitor the application:
   - Check Render's logs for any errors
   - Monitor database connections
   - Test all critical functionalities

## Troubleshooting

1. If the frontend can't connect to the backend:
   - Verify the `VUE_APP_API_URL` environment variable
   - Check CORS configuration in backend
   - Check Render logs for any errors

2. If database connection fails:
   - Verify database credentials
   - Check if database is accessible from Render's IP
   - Verify database configuration in environment variables
