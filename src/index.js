// import express from "express";
// import cors from 'cors';
// import bodyParser from 'body-parser';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const routes = require('./routes/index.js');

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(routes)

const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>{console.info(`App is running on port ${PORT}`)})

//export default app

module.exports = app