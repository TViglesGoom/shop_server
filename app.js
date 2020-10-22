const express = require('express');
require('dotenv').config({path: './config/.env'});
const {PORT} = process.env;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
console.log("SELECT \"Product\".\"id\", \"Product\".\"name\", \"Product\".\"price\", \"Product\".\"expiration_date\", \"Product\".\"measuring\", \"Product\".\"quantity\", \"Product\".\"createdAt\", \"Product\".\"updatedAt\", \"Product\".\"category_id\", \"Product\".\"supplier_id\", \"Supplier\".\"id\" AS \"Supplier.id\", \"Supplier\".\"name\" AS \"Supplier.name\", \"Supplier\".\"createdAt\" AS \"Supplier.createdAt\", \"Supplier\".\"updatedAt\" AS \"Supplier.updatedAt\", \"Category\".\"id\" AS \"Category.id\", \"Category\".\"name\" AS \"Category.name\", \"Category\".\"createdAt\" AS \"Category.createdAt\", \"Category\".\"updatedAt\" AS \"Category.updatedAt\" FROM \"Products\" AS \"Product\" LEFT OUTER JOIN \"Suppliers\" AS \"Supplier\" ON \"Product\".\"supplier_id\" = \"Supplier\".\"id\" LEFT OUTER JOIN \"Categories\" AS \"Category\" ON \"Product\".\"category_id\" = \"Category\".\"id\";");
const {ProductCRUD} = require('./db');
app.get('/products', (req, res) =>
    ProductCRUD.listAllProducts().then(todo => res.status(201).send(todo))
    .catch(error => res.status(400).send(error)))

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`)
})
