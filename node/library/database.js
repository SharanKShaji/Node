const mysql = require("mysql");
const util = require('util');

const dbConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Shoppingcart",
  });
  return {
    query( sql, args ) {
      return util.promisify( connection.query )
        .call( connection, sql, args );
    },
    close() {
      return util.promisify( connection.end ).call( connection );
    }
  };
};

module.exports = { dbConnection };
