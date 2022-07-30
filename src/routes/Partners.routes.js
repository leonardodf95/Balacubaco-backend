const { Router } = require('express');
const PartnerController = require('../controllers/PartnerController')

const router = Router()

router.get('/partners/:id', PartnerController.findByUuid);
router.get('/partners', PartnerController.findAllPartners);
router.post('/partners/create', PartnerController.createPartner);
router.put('/partners/update/:id', PartnerController.updatePartner);
router.delete('/partners/delete/:id', PartnerController.deletePartner);

module.exports = router