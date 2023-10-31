const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const employeeRoutes = require('./routes/employeeRoutes.js')
const departmentRoutes = require('./routes/departmentRoutes.js')

const app = express();

// use modules
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// use routes
app.use("/employees/", employeeRoutes)
// app.use("/employees/", employeeRoutes)
// app.use("/departments/", departmentRoutes);

module.exports = app;