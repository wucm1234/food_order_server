var express = require('express');

const mongoose = require('./api/middleware/db');
const Router = require('./api/router')
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
const PORT = 3001 || process.env.PORT;
app.use(bodyParser.json());
app.use(cors());
mongoose.db();
app.get("/", function(req, res) {
    res.json("hello meal app")
}) 
app.use("/", Router);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // Run server