
const Sequelize = require('sequelize')
const dbConfig = require('../config/config.json')

const User =  require('./User')
const Partners =  require('./Partner')

const models = [ User, Partners ]

class DataBase {
    constructor() {
        console.log('Creating DB instance...')
        this.init()
    }

    init() {
        console.log('Starting database...')
        this.connection = new Sequelize(dbConfig[process.env.ENV || 'development']) 

        models
            .map(model => model.init(this.connection ))
            .map(model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new DataBase()