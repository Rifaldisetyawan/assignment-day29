const User = require('../model/user')
const db = require('../config/db')
const fs = require('fs');
class controllerUsers {
    static getUsers(req, res) {
        db.query(User.getUsers(),(err,result)=>{
            if(err) throw err;
            res.status(200)
            res.send(result)
        })
    }

    static createUsers(req, res) {
        const id = req.body.id;
        const username = req.body.username;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password= req.body.password;
        const phone = req.body.phone;
        const userStatus = req.body.userStatus;
        

        db.query(User.createUsers(),[id,username,firstName,lastName,email,password,phone,userStatus],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
                res.status(201)
                res.send(data)
        })
    }

    static updateUsers(req,res){
        // const id = req.params.id
        // const username = req.body.username;
        // const firstName = req.body.firstName;
        // const lastName = req.body.lastName;
        // const email = req.body.email;
        // const password= req.body.password;
        // const phone = req.body.phone;
        // const userStatus = req.body.userStatus;
        // db.query(User.updateUsers, [username,firstName,lastName,email,password,phone,userStatus,id], function (err) {
        //     if(err){res.status(400).json(err)
        //         return
        //     }
        //         res.status(201)
        //         res.send(req.body)
        // });
    }

    static deleteUsers(req,res){
        const id = req.params.id  
        db.query(User.deleteUsers(),[id],(err, result)=> {  
            if(err){res.status(400).json(err)
                return
            }
        console.log("Number of records deleted: " + result.affectedRows);  
        res.status(200)
        res.send("Number of records deleted: " + result.affectedRows)
        });  
    }
}
module.exports = controllerUsers