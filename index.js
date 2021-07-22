const express = require('express')

const app = express()

app.use(require('./routes/products.route'));

app.listen(4001, () => {})

