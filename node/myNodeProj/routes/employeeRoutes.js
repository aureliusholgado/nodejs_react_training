const express = require('express')
const employeeController = require('../controllers/employeeController.js')
const employeeServices = require('../services/employeeServices.js')

const router = express.Router()

router.post("/register", employeeController.register)
router.get("/", employeeController.getAllEmployees)

// router.get("/", (req, res) => {
//     let employees = "eliot"
//     res.status(200).json({
//         "data":employees
//     })
// })


module.exports = router;