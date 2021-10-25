const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Setup Express App
const app = express();

// Connect to mongodb
mongoose.connect("mongodb://localhost/user");
mongoose.Promise = global.Promise;

app.use(express.static("Frontend"));

// Accept JSON data for POST request
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

// Access Routers from Api.js
app.use("/api", require("./routes/api"));

// Access Routers from Api.js
app.use("/apiList", require("./routes/apiList"));

// Access Routers from Api.js
app.use("/apiEmp", require("./routes/apiEmp"));

// Error Handling Middleware
app.use(function (err, req, res, next) {
    res.status(422).send({
        error: err.message
    });
});

// Listen for Request
app.listen(process.env.port || 4000, function () {
    console.log("Connection!!! Go Break Some Eggs...");
});
