require("dotenv").config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require('./routes/auth');



mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE, { 
    useNewUrlParser: true,
})
    .then(() => {
    console.log("DB CONNECTED");
})

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use("/api", authRoutes);


//PORT
const port = process.env.PORT || 8000;


// Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});

