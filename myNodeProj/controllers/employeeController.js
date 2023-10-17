const employeeService = require("../services/employeeServices.js")

const getAllEmployees = async (req, res) => {
    const employees = await employeeService.getEmployees();
    
    res.status(200).json({
        "status":200,
        "data": employees
    })
}

module.exports = {getAllEmployees};