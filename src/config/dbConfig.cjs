// import pkg from 'pg'

// import dotenv from 'dotenv'
// import { query, text } from 'express'

// const {Pool} = pkg
// dotenv.config()

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL
// })

// pool.on('connect', ()=> {
//     console.log('Base de Dados conectado com sucesso!');
// })

// query: (text, params) => pool.query(text, params)

// export default query

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};