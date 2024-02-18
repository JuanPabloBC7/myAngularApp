// import mysql from 'promise-mysql';
import mysql from 'mysql';
import keys from './keys'

const pool = mysql.createPool(keys.database);

// pool.getConnection()
//     .then((connection: any) => {
//       pool.releaseConnection(connection);
//       console.log('DB is connected');
//     });

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

// pool.getConnection((err, connection) => {
//   if (err) throw err; 
//   connection.release(); 
//   console.log('DB is connected'); 
// });

export default pool;