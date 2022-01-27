const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be provided"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    }
}, { timestamps: true })

///// make the objectName schema and export \\\\\
const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author;