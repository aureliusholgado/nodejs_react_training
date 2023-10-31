// using the promise wrapper
async function main() {

    // get the client
    const mysql = require('mysql2/promise');

    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'mydb'});
    
    // query database
    const [rows, fields] = await connection.execute('SELECT * FROM `customers` WHERE `name` = ? AND `address` = ?', ['Eliot', 'Pasig']);

    console.log(rows)
    console.log(fields)
    
}
main()

// this can also work with pools
async function main2() {

    // get the client
    const mysql = require('mysql2');

    // create the pool
    const pool = mysql.createPool({host:'localhost', user: 'root', database: 'mydb'});

    // now get a Promise wrapped instance of that pool
    const promisePool = pool.promise();

    // query database using promises
    const [rows,fields] = await promisePool.query('SELECT * FROM `customers` WHERE `name` = ? AND `address` = ?', ['Gelo', 'noVaLIches']);

    console.log(rows)
    console.log(fields)

  }
main2()