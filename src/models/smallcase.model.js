const mongoose = require('mongoose');

const smallcaseSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    img: { type: String, required: true },
    cagYear: { type: Number, required: true },
    cagRate: { type: Number, required: true },
    minAmount: { type: Number, required: true },
    volatility: { type: String, required: true },
    factSheet: { type: String, required: true },
    ques_title: { type: String, required: true },
    discription: [{ type: String, required: true }]
})

module.exports = mongoose.model("smallcase", smallcaseSchema);