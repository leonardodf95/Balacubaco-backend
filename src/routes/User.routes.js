const { Router } = require('express');
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users/:id', UserController.findByUuid);
router.get('/users', UserController.findAllUsers);
router.post('/users/create', UserController.createUser);
router.put('/users/update', UserController.updateUser);
router.delete('/users/delete/:id', UserController.deleteUser);

module.exports = router