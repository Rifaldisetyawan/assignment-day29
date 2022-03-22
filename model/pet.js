const fs = require('fs')
// const db = require('../config/db')
class Pet {
    static getPets() {
        const data = JSON.parse(fs.readFileSync('pet.json'))
        return data
    }

    static create(data) {
        const allData = JSON.parse(fs.readFileSync('pet.json'))
        allData.push(data)
        fs.writeFileSync('pet.json', JSON.stringify(allData, null, 2))
    }

    // static create(data) {
    //     const query = `INSERT into members (id, name) VALUES(?,?)`

    //     db.run(query, [data.id, data.name], function(err) {
    //         if (err) {
    //             console.log(err)
    //         }
    //     })
    // }

    static findById(id) {
        const allData = JSON.parse(fs.readFileSync('pet.json'))
        return allData.find(val => val.id == id )
    }

    
}

module.exports = Pet