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
});

app.get('/api/v1/query',(req,res) =>{
    const {search,limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((produt)=>{
            return produt.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length < 1){
        return res.status(200).send('Resource not found');
    }
    res.status(404).json(sortedProducts);
})

app.listen(5000,() =>{
    console.log("Listening to port number 5000");
});