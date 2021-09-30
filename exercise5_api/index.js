const { json } = require('body-parser');
const express = require('express')
const app = express()
const port = 4000
const {v4: uuidv4 } = require('uuid');
const productData = require('./data.json')
const cors = require('cors');

app.use(cors())

app.use(express.json());

app.get('/products', (req, res) => {
    res.json(productData);
})

app.post('/products', (req, res) => {
    console.log('Creating new product');
    console.log(req.body);
    productData.items.push({
        id: uuidv4(),
        manufacturer: req.body.manufacturer,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    })
    res.send('product added')
})

app.delete('/products', (req, res) => {
    const result = productData.items.findIndex(d => d.id === req.body.id)
    if(result !== -1){
        productData.items.splice(result, 1);
        res.send('delete succeeded')
    }else{
        res.send('no such invoice found')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})