let mongoose = require('mongoose');

let ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        minlength: [5, 'Title must be at least 5 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minlength: [10, 'Description must be at least 10 characters.']
    },
    checked:{
        type: Boolean,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    tagged:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }

}, { timestamps: true });

mongoose.model('List', ListSchema);
