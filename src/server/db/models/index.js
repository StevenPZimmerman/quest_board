const mysql = require("mysql");

// const xxx = require("../queries/xxx")

const mysqlConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "questboard",
};

const Connection = mysql.createPool(mysqlConfig);

const Query = (query, values) => {
    return new Promise ((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

export default Query;