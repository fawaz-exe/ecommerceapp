const express = require("express");

const app = express();

const port = 3000;

app.get("/login", (request, response) => {
    return response.send("You are visiting Login Route");
});

app.get("/", (request, response) => {
    return response.send("Homepage");
});

app.get("/signin", (request, response) => {
    return response.send("You are signin");
});

app.get("/fawaz", (request, response) => {
    return response.send("He uses Twitter");
});

app.listen(port, () => {
    console.log("Server is up and running....🚀");
});


// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })


// expressjs.com installing expressjs
//nodemon.io =  automatic running of the server
