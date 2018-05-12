const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Uni Schema & model

const UniSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Field is required']
    },
    briefDescription: String,
    rank: Number,
    avgFees: Number,
    status: String,
    researchOutput: String,
    numStudents: Number,
    image: String
});

const Uni = mongoose.model('uni', UniSchema);

module.exports = Uni;