const fs = require('fs')
const db = require('../config/db')
class User {
    static getUsers() {
        let selectQuery = `SELECT * FROM user`;
        return selectQuery;
    }

    static createUsers() {
        let sql = `INSERT INTO user (id,username,firstName,lastName,email,password,phone,userStatus) VALUES(?,?,?,?,?,?,?,?)`;
        return sql;
        
    }

    // static updateUsers(){
    //     let updateQuery = `UPDATE user SET username = ?,firstName = ?,lastName = ?,email = ?,password = ?,phone = ?,userStatus = ? WHERE id = ?`;
    //     return sql;

    // }

    static deleteUsers(){
    let deleteQuery = `DELETE FROM user WHERE id =?`;
        return deleteQuery;
    }
}

module.exports = User