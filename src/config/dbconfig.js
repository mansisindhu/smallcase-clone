const mongoose = require("mongoose");

module.exports = () => {
    // link to connect to online database
    return mongoose.connect("mongodb+srv://mansi_093:Mansi_1234@cluster0.nab9t.mongodb.net/smallcase?retryWrites=true&w=majority");
}