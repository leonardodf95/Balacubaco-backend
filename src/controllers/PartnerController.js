const database = require('../models');

class PartnerController{
    
    static async findAllPartners(req, res) {
        try {
            const partners = await database.Partners.findAll();
            return res.status(200).json(partners);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async findByUuid(req, res) {
        const { id } = req.params
    

        try {
            //onde a coluna id do banco for igual ao id.req.params
            const partner = await database.Partner.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(partner)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPartner(req, res) {
        const newPartner = req.body

        try {
            const partner = await database.Partner.create(newPartner)
            return res.status(200).json(partner)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async updatePartner(req, res) {
        const { id } = req.params
        const changes = req.body

        try {
            const partner = await partnerdb.update(changes, { where: { id: Number(id) } } )
            const changedPartner = await partnerdb.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(changedPartner)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async deletePartner(req, res) {
        const { id } = req.params

        try {
            const partner = await partnerdb.destroy(changes, { where: { id: Number(id) } } )
            return res.status(200).json({ data: `o partner do id ${id} foi deletado!!`} )
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}


module.exports = PartnerController