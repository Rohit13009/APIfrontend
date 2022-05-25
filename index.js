const express = require("express");
const app = express();
const port = 1000;
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./src/routes");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,'src/views'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public/assets')));

app.use(routes)


app.listen(port,()=>{console.log(`server is running on port ${port}`);});