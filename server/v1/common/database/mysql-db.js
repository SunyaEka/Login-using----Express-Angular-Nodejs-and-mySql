const mysql = require('mysql');

class MySql {
    constructor() {
        // Used pool because with pool we can cache the previous connection and through with it we can reconnect when it released
       this.pool = mysql.createPool({
            host : 'localhost',
            user : 'root',
            password : '******',
            database : 'customer_login',
            debug: false,
        });
    //    this.mysqlConnection = mysql.createConnection({
    //         host : 'localhost',
    //         user : 'root',
    //         password : '',
    //         database : '',
    //         debug: false,
    //     });
    }
    createRecord(table, record) {
        console.log(record);
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection)=> {
                if(err) {
                    console.log("DB CONNECTION FAILED", JSON.stringify(err,undefined,2));
                    reject(err);
                }else {
                    console.log("DB CONNECTION SUCCEDED.");
                    connection.query(
                        `INSERT INTO ${table} (firstname, email, mobilenumber, password, verificationtoken) VALUES ('${record.firstname}','${record.email}','${record.mobilenumber}','${record.password}','${record.verificationtoken}')`,
                        (err, rows, fields) => {
                        if(err) {
                            reject(err);
                        }else {
                            console.log(rows);
                            // Never use end() because it end all the connection and it not gonna connect and run's any query until server restart
                            connection.release();
                            resolve("success");
                        }
                    })
                }
            });
        });
    }

    findRecord(table, query, data) {
        console.log("1111",data);
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection)=> {
                if(err) {
                    console.log("DB CONNECTION FAILED", JSON.stringify(err,undefined,2));
                    reject(err);
                }else {
                        connection.query(
                        `SELECT userid, firstname, email, mobilenumber, password, verificationtoken FROM ${table} WHERE ${query}= '${data}'`,
                        (err, rows, fields) => {
                            if(err) {
                                reject(err);
                            }else {
                                // Never use end() because it end all the connection and it not gonna connect and run's any query until server restart
                                connection.release();
                                resolve(rows);
                            }
                        })
                }
            });
        });
    }

    updateRecord(table, query, data) {
        let newPassword = data.newPassword;
        let username = data.username? data.username : data.email;
        let verificationtoken = data.token;
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection)=> {
                if(err) {
                    console.log("DB CONNECTION FAILED", JSON.stringify(err,undefined,2));
                    reject(err);
                }else {
                    if(data.token && data.token.length>0 && data.emptyToken) {
                        connection.query(
                            `UPDATE ${table} SET verificationtoken = NULL WHERE ${query}= '${username}'`,
                            (err, rows, fields) => {
                                if(err) {
                                    reject(err);
                                }else {
                                    // Never use end() because it end all the connection and it not gonna connect and run's any query until server restart
                                    connection.release();
                                    resolve(rows);
                                }
                            })
                    }else if(data.token && data.token.length>0 && data.changePasswordReq) {
                        connection.query(
                            `UPDATE ${table} SET password='${newPassword}' WHERE ${query}= '${verificationtoken}'`,
                            (err, rows, fields) => {
                                if(err) {
                                    reject(err);
                                }else {
                                    // Never use end() because it end all the connection and it not gonna connect and run's any query until server restart
                                    connection.release();
                                    resolve(rows);
                                }
                            })
                    }else if(data.token && data.token.length>0) {

                        connection.query(
                            `UPDATE ${table} SET verificationtoken='${verificationtoken}' WHERE ${query}= '${username}'`,
                            (err, rows, fields) => {
                                if(err) {
                                    reject(err);
                                }else {
                                    // Never use end() because it end all the connection and it not gonna connect and run's any query until server restart
                                    connection.release();
                                    resolve(rows);
                                }
                            })
                    }else if(data.username && data.newPassword) {
                        connection.query(
                            `UPDATE ${table} SET password='${newpassword}' WHERE ${query}= '${username}'`,
                            (err, rows, fields) => {
                                if(err) {
                                    reject(err);
                                }else {
                                    // Never use end() because it end all the connection and it not gonna connect and run's any query until server restart
                                    connection.release();
                                    resolve(rows);
                                }
                            })
                    }
                }
            });
        });
    }

}

module.exports = MySql
