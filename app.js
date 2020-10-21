const express = require('express');
require('dotenv').config({path: './config/.env'});
const {PORT} = process.env;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`)
})
