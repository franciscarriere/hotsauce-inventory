const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Batch = new Schema(
    {
        name: { type: String, required: true },
        date: { type: Date, required: true },
        ingredients: [ { ingredient: String, quantity: String } ]
    },
    { timestamps: true },
)

module.exports = mongoose.model('batches', Batch)