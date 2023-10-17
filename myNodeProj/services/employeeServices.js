const pool = require("../utils/db.js")

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
    return new Promise((resolve, reject) => {
        let query = "INSERT INTO employees (name, email, role, password) VALUES (?, ?, ?, ?)"
        pool.execute(
            query, [name, email, role, password], 
            (err, results, fields) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            }
        )
    })
}

module.exports = {
    getEmployees,
    registerEmployee
};