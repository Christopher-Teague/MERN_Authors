const mongoose = require('mongoose')

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
    .then( ()  => console.log(`🐵🐵 Connected to ${DB} database 🐵🐵`))
    .catch( err => console.log('Cannot connect to db 😥', err))
}