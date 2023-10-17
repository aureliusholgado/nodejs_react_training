const employeeService = require("../services/employeeServices.js")

const getAllEmployees = async (req, res) => {
    const employees = await employeeService.getEmployees();
    
    res.status(200).json({
        "status":200,
        "data": employees
    })
}

const register = async (req, res) => {
    try{
        await employeeService.registerEmployee(req.body.name, req.body.email, "user", req.body.password);

        res.status(200).json({
            "status": 200,
            "message": "New employee registered"
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getAllEmployees,
    register
};