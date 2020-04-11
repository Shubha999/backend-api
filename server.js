const express = require("express");
const dotenv = require("dotenv");

//Load routes
const bootcamps = require('./routes/bootcamps');
// Load env vars from config file

dotenv.config({path: './config/config.env' });

// Initialize app variable with express

const app = express();
// Mount routers to get middleware
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

