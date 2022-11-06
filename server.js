const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')    // database restful_api_relation_mongodb
const multer = require('multer')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// saat ini saat input user masih hardoce di controllernya
const userRoutes = require('./src/routes/User')
const docsRoutes = require('./src/routes/Document')
// app.use('/v1/produk', produkRoutes)
app.use('/', userRoutes)
app.use('/doc', docsRoutes)

mongoose.connect('mongodb+srv://Nur66:1234@restfulapi.ylhaji2.mongodb.net/RESTFUL_API_RELATION_MONGODB?retryWrites=true&w=majority')
.then(()=> {
    app.listen(2311, () => {
        console.log(`Server started on port 2311`);
    });
})
