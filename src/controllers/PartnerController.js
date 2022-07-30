    const Partner = require('../models/Partner');

class PartnerController{
    
    static async findAllPartners(req, res) {
        try {
            const partners = await Partner.findAll();
            return res.status(200).json(partners);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async findByUuid(req, res) {
        const { id } = req.params
        try {
            const partner = await Partner.findOne({ where: { partner_id: id } })
            return res.status(200).json(partner)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPartner(req, res) {
        const {partner_id, partner_name, cnpj, password} = req.body
        try {
            const partner = await Partner.create({partner_id, partner_name, cnpj, password})
            return res.status(200).json(partner)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async updatePartner(req, res) {
        const { id } = req.params
        const {partner_id, partner_name, cnpj, password} = req.body
        try {
            await Partner.update({partner_id, partner_name, cnpj, password}, { where: { partner_id: id } } )
            const changes = await Partner.findOne({ where: { partner_id: id } })
            return res.status(200).json(changes)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async deletePartner(req, res) {
        const { id } = req.params
        try {
            await Partner.destroy({ where: { partner_id: id } })
            return res.status(200).json({ data: `o partner_id ${id} foi deletado!!`} )
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = PartnerController