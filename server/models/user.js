let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'List'
    }],
}, { timestamps: true });

mongoose.model('User', UserSchema);
