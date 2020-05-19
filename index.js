const express = require('express')
const app = express()
const queries = require('./db/queries.js')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())


app.use(bodyParser.json())

const PORT = process.env.PORT || 9001 

app.listen(PORT, () =>{
    console.log(`app is listening on port ${PORT}`)
})

app.get("/products",  (request, response) => {
    queries.product.get().then(products => response.send(products))
})