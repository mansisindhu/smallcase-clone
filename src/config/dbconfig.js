const mongoose = require("mongoose");

module.exports = () => {
    // link to connect to online database
    return mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nab9t.mongodb.net/smallcase?retryWrites=true&w=majority`);
}