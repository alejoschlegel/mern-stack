const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema ({
    name: { type: String, required: true },
    description: { type: String, required: true },
})

module.exports = mongoose.model("Item", itemSchema);