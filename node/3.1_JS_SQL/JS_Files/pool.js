// Using connection pools

    // Connection pools help reduce the time spent connecting to the MySQL server by reusing a previous connection, leaving them open instead of closing when you are done with them.

    // This improves the latency of queries as you avoid all of the overhead that comes with establishing a new connection.

// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb'
  });

// The pool does not create all connections upfront but creates them on demand until the connection limit is reached.

// pool initialization
pool.query('SELECT * FROM `customers` WHERE `address` = "QC"', (err, rows, fields) => {
    if(err)throw err
    console.log(rows)
    console.log(fields)
    // pool is automatically released when this query is resolved
})