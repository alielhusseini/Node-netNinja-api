const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
        required: [true, 'Name field is required']
    },
    available: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Api = mongoose.model('Api', apiSchema);
module.exports = Api;