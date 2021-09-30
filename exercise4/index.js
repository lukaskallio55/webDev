const { json } = require('body-parser');
const express = require('express')
const app = express()
const port = 3000
const {v4: uuidv4 } = require('uuid');

/** Ohjelman ostotapahtuma toimii lisäämällä ensin tuote/tuotteet ostoskoriin (tuotteen id:n avulla).
 * Seuraavaksi tuote/tuotteet "ostetaan" käyttäjän id:tä hyödyntäen, jolloin luodaan lasku tapahtumasta.
 */

app.use(express.json());

let purchaseCalculator = 0; // pitää kirjaa ostoskärryssä olevien tuotteiden määrästä
let totalPrice = 0;  // tähän muuttujaan lasketaan tuotteiden summa

let users = [{  //taulukko käyttäjille
    id: uuidv4(),
    name: "Nikke Knatterton",
    email: "Nikke.Kantterton@gmail.com",
    adress: "Kujakatu 69",
    tel: "040 382 1019"
}]

let products = [{  //taulukko tuotteille
    id: uuidv4(),
    manufacturer: "Innova",
    name: "Star Destroyer",
    category: "Driver",
    description: "Destroyer on kovakätisen pelaajan luottolätty!",
    price: 17.90
},
{
    id: uuidv4(),
    manufacturer: "Innova",
    name: "Leopard3",
    category: "Driver",
    description: "Destroyer on kovakätisen pelaajan luottolätty!",
    price: 17.90
}]

let invoices = [{  // taulukko laskuille
}]

let cart = [{  // taulukko ostoskärryssä oleville tuotteille
}]

app.post('/users/:id/invoices', (req, res) => {  // "Ostetaan" ostoskärryssä olevat tuotteet ja luodaan uusi lasku
    const result = users.findIndex(d => d.id === req.params.id);
    if(result !== -1){
        invoices.push({
            id: uuidv4(),
            user: users[result].id,
            cart,
            totalPrice
        })
        totalPrice = 0;
        cart = [];
        purchaseCalculator = 0;
        res.send('new invoice added')
    }else{
        res.send('no such user found')
    }
})

app.post('/discs/:id/cart', (req, res) => {  // lisätään tuotteita ostoskärryyn
    const result = products.findIndex(d => d.id === req.params.id);
    if(result !== -1){
        cart[purchaseCalculator] = products[result]
        res.send('product purchased')
        purchaseCalculator++;
        totalPrice += products[result].price;
    }else{
        res.send('no such product found')
    }
})

app.get('/users/:id/cart', (req, res) => { // saadaan kärryssä olevat tuotteet
    res.json(cart);
})

app.get('/users/:id/invoices/', (req, res) => {  // saadaan käyttäjän kaikki laskut
    const result = invoices.filter(d => d.user === req.params.id)
    res.json(result);
})

app.get('/users/invoices/:id', (req, res) => {  // saadaan käyttäjän yksittäinen lasku
    const result = invoices.find(d => d.id === req.params.id)
    res.json(result);
})

app.delete('/users/invoices/:id', (req, res) => { // poistetaan lasku
    const result = invoices.findIndex(d => d.id === req.params.id)
    if(result !== -1){
        invoices.splice(result, 1);
        res.send('delete succeeded')
    }else{
        res.send('no such invoice found')
    }
})

app.post('/users', (req, res) => {  // lisätään uusi käyttäjä
    console.log('Creating new user');
    console.log(req.body);
    users.push({
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        adress: req.body.adress,
        tel: req.body.tel
    })
    res.send('New user added')
})

app.get('/users', (req, res) => {  // saadaan käyttäjät
    res.json(users);
})

app.get('/discs', (req, res) => {  // saadaan tuotteet
    res.json(products);
})

app.get('/discs/:id', (req, res) => {  // saadaan yksittäinen tuote
    const result = products.find(d => d.id === req.params.id)
    res.json(result);
})

app.post('/discs', (req, res) => {  // lisätään uusi tuote
    console.log('Creating new product');
    console.log(req.body);
    products.push({
        id: uuidv4(),
        manufacturer: req.body.manufacturer,
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    })
    res.send('New product added')
})

app.put('/discs/:id', (req, res) => {  // muokataan olemassa olevaa tuotetta
    console.log('updating product')
    const update = {
        id: req.params.id,
        manufacturer: req.body.manufacturer,
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    }
    const result = products.findIndex(d => d.id === req.params.id);
    if(result !== -1){
        products[result] = update;
        res.send('product updated')  
    }else{
        res.send('no such product found')
    }    
    })

app.get('/search', (req, res) => { // haku ominaisuus
    const result = [products.filter(d => d.name === req.body.search), products.filter(d => d.manufacturer === req.body.search), products.filter(d => d.category === req.body.search)];
    res.json({ result });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})