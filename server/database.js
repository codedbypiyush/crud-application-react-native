// const {Pool} =require(pg);

const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "1234",
//   host: "localhost",
//   port: 5432,
//   database: "yt_login_system",
// });
// PostgreSQL configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student_registration",
  password: "1234",
  port: 5432,
});

// const createTblQry = `CREATE TABLE accounts(
//   user_id serial PRIMARY KEY,
//   username VARCHAR (50) NOT NULL UNIQUE ,
//   password VARCHAR (50) NOT NULL UNIQUE )`

// pool
// .query(createTblQry).then((Response) =>{
//     console.log("Table Created")
//     console.log(response)
// })
// .catch((err)=>{
//     console.log(err);
// });

module.exports = pool;
