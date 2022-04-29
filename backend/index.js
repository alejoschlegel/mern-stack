const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');

/* SETTINGS */
app.set("port", 3000);

/* MIDDLEWARES */
app.use(morgan('dev'));
app.use(express.json());

/* ROUTES */
app.use("/api", require('./routes'));

/* STATIC FILES */
app.use(express.static(path.join(path.dirname(__dirname), "frontend" , "public")));
console.log(path.join(path.dirname(__dirname), "frontend" , "public"));

/* STARTING THE SERVER */
app.listen(app.get("port"), () => console.log(`app listening on port ${app.get("port")}!`));