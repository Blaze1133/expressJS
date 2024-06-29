const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/',(req,res) =>{
    res.send('<h1>Home page </h1><a href= "/api/products">Products</a>')
})

app.get('/api/products',(req,res) =>{
    const newProd = products.map((product) =>{
        const{id,name,image} = product;
        return {id,name,image};
    })
    res.json(newProd);
})

app.get('/api/products/:productId',(req,res)=>{
    const {productId} = req.params;
    const singleProd = products.find((product) => product.id === Number(productId));
    if(!singleProd){
        res.status(404).send("Product does not exist");
    }
    res.json(singleProd);
})

app.listen(5000,() =>{
    console.log("Listening to port number 5000");
});