// Visit the ff for documentation
    // https://www.w3schools.com/nodejs/nodejs_mysql.asp
    // https://www.npmjs.com/package/mysql2
    
// npm install mysql2

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
  rowsAsArray: true // to return an array of arrays instead of an array of objects -> useful for looping
});

// create a database -> make sure that there is no database property-value in connection
    // connection.connect(
    //     function(err) {
    //         if (err) {
    //             throw err;
    //         }else{
    //             console.log("Connected!");
    //             connection.query(
    //                 "CREATE DATABASE mydb", 
    //                 function (err, result) {
    //                     if (err) {
    //                         throw err;
    //                     }else{
    //                         console.log("Database created");
    //                     }
    //                 }
    //             );
    //         }
    //     }
    // );

// creating a table
    // connection.connect(
    //     function(err) {
    //         if (err) {
    //             throw err;
    //         }else{
    //             console.log("Connected!");
    //             // this is the most basic way of doing it; the others are just error handlers
    //             var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    //             connection.query(sql, function (err, result) {
    //                 if (err) throw err;
    //                 console.log("Table created");
    //             })
    //         }
    //     }
    // )

// inserting into table
    // connection.connect(
    //     function(err){
    //         if(err){
    //             throw err;
    //         }else{
    //             console.log("Inserted!")
    //             let sql = "INSERT INTO customers(name, address) VALUES ('Yves', 'QC')"
    //             connection.query(
    //                 sql, 
    //                 function(err, result){
    //                     if (err) throw err;
    //                     console.log("Values inserted")
    //                 }
    //             )
    //         }
    //     }
    // )

// simple query - selecting values
    // connection.query(
    //     'SELECT * FROM `customers` WHERE `name` = "Harris"',
    //     function(err, results, fields){
    //         console.log(results)
    //         console.log("Name: " + results[0].name);
    //         console.log("Address: " + results[0].address);
    //         console.log(fields);
    //     }
    // )

// simple query - selecting values with placeholder
    connection.query(
        'SELECT * FROM `customers` WHERE `name` = ? AND `address` = ?',
        ['Yves', 'QC'],
        function(err, results, fields){
            console.log(results)
            console.log("Name: " + results[0][0]);
            console.log("Address: " + results[0][1]);
        }
    )

// rowsAsArray in the query level
    // connection.query({ sql: 'select 1 as foo, 2 as foo', rowsAsArray: true }, function(err, results, fields) {
    //     console.log(results); // in this query, results will be an array of arrays rather than an array of objects
    //     console.log(fields); // fields are unchanged; 1 and 2 will be assigned the aliases 'foo'
    // });