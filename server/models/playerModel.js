const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let PlayerSchema = new Schema({
    firstname: {
        type: String, required: true
    },
    lastname : {
        type: String, required: true
    },
    RBI : {
        type: Number
    },
    HR : {
        type: Number
    },
    hits : {
        type: Number
    },
    doubles : {
        type: Number
    },
    triples : {
        type: Number
    },
    AVG : {
        type: Number
    },
    SO : {
        type: Number
    }
})

// const Player = mongoose.model('Player', PlayerSchema);