const mongoose = require("mongoose");
require("dotenv").config();
const URI = `mongodb+srv://${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}@cluster0.ibiyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(URI)
    .then(db => console.log('DB is connected '))
    .catch(err => console.error(err));
module.exports = mongoose;