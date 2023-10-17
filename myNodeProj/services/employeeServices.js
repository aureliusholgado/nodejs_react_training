const pool = require("../utils/db.js")
const bcrypt = require("bcrypt")

const getEmployees = () => {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM `employees`";
      pool.execute(query, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
};

const registerEmployee = async (name, email, role, password) => {
    return new Promise(async (resolve, reject) => {

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        let query = "INSERT INTO employees (name, email, role, password) VALUES (?, ?, ?, ?)"
        pool.execute(
            query, [name, email, role, hash], 
            (err, results, fields) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            }
        )
        
        // Generate Token

    })
}

// Login -> bcrypt.compare(req.body.pw, passwordInDB) in essence

module.exports = {
    getEmployees,
    registerEmployee
};