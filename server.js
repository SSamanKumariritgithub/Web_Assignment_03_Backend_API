const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const vehicleRoutes = require('./routes/vRegisters');

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(vehicleRoutes);

const PORT = 3001;
const DB_URL = 'mongodb+srv://ar98369:Shaku%40127@cluster0.wjhl5zm.mongodb.net/mernCRUD?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
    .then(() =>{
        console.log('DB Conected');
    })
    .catch((err) => console.log('DB Connection Error',err));

app.listen(PORT, ()=>{
    console.log(`App is running on port http://localhost:${PORT}`);
});