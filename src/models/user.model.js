const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required:true},
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: "smallcase_data" ,required: false}]
})

module.exports = mongoose.model("user_data", userSchema);