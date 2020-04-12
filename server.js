const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env vars from config file
dotenv.config({path: './config/config.env' });

// Connect to DB
connectDB();

//Load routes
const bootcamps = require('./routes/bootcamps');

// Initialize app variable with express
const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers to get middleware
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}.red`);

    // Close server and exit
    server.close(() => process.exit(1));
});

