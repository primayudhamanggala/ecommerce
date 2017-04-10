const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store')

const item = require('./routes/item')
const customer = require('./routes/customer')
const transaction = require('./routes/transaction')

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use('/items', item)
app.use('/customers', customer)
app.use('/transactions', transaction)

app.listen(3000)
