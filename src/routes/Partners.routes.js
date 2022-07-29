const { Router } = require('express');
//import courses from './Courses.routes.js'
const PartnerController = require('../controllers/PartnerController')

//importando o Router do Express para obter os metodos existentes pra criacao de rotas (get, post, put, delete)
const router = Router()

//vai ter que passar na rota um parametro "id"
router.get('/partners/:id', PartnerController.findByUuid);
router.get('/partners', PartnerController.findAllPartners);
router.post('/partners/create', PartnerController.createPartner);
router.put('/partners/update', PartnerController.updatePartner);
router.delete('/partners/delete', PartnerController.deletePartner);



//TESTES
router.get('/', (request, response)=> response.status(200).send({mensagem: "ola mundo"}));
router.post('/body', async(request, response) => {
        const { name, age } = request.body;
        const user = { name, age }
    
        return response.status(200).json(user); // Retorna o usuário recém criado
    })


//partner do Router()
module.exports = router