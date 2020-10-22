const express = require('express');
require('dotenv').config({path: './config/.env'});
const {PORT} = process.env;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const MainRouter = require('./routes');
app.use('/', MainRouter);

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`)
})
