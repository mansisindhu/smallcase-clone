const mongoose = require("mongoose");

module.exports = () => {
    // link to be edited here of online server database
    return mongoose.connect("mongodb://127.0.0.1:27017/masaiUsersData");
}