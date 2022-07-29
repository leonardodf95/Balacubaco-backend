const { Router } = require('express');
const UserController = require('../controllers/UserController')

//importando o Router do Express para obter os metodos existentes pra criacao de rotas (get, post, put, delete)
const router = Router()

//vai ter que passar na rota um parametro "id"
router.get('/users/:id', UserController.findByUuid);
router.get('/users', UserController.findAllUsers);
router.post('/users/create', UserController.createUser);
router.put('/users/update', UserController.updateUser);
router.delete('/users/delete', UserController.deletUser);

//partner do Router()
module.exports = router