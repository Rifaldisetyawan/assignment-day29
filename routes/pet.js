const express = require('express')
const fs = require('fs')
const controllerPets = require('../controller/pet')
const router = express.Router()
// const controllerMembers = require('../controllers/member')
// const middleware = require('../middleware')
// const jwt = require('jsonwebtoken')

const pets = JSON.parse(fs.readFileSync('pet.json','utf-8'))

router.get('/', controllerPets.getPets)

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    let foundPet = null

    for (let index = 0; index < pets.length; index++) {
        if (pets[index].id == id) {
            foundPet = pets[index]
            break;
        }
    }
    
    res.status(200).json(foundPet)
})

router.post('/', controllerPets.createPets)

// router.post('/login', controllerMembers.login)

// update data
router.put('/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('pet.json'))
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == req.params.id) {
            console.log(data[i])
            data[i] = req.body
            fs.writeFileSync('pet.json', JSON.stringify(data, null, 2))
            break;
        }
    }
    res.status(201).json(req.body)
})

module.exports = router