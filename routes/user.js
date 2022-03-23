const express = require('express')
const fs = require('fs')
const controllerUsers = require('../controller/user')
const router = express.Router()

router.get('/', controllerUsers.getUsers)

router.post('/', controllerUsers.createUsers)

router.put('/:id', controllerUsers.updateUsers)

router.delete('/:id',controllerUsers.deleteUsers)

module.exports = router