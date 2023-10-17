const pool = require("../utils/db.js")

const getEmployees = async () => {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM `employees`";
      pool.execute(query, (err, results, fields) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

module.exports = {getEmployees};