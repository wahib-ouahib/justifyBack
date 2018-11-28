const mongoose = require('mongoose');

//defining the users schema
const userSchema = mongoose.Schema({
    //_id: mongoose.Schema.types.ObjectIdi"
    email: {
        type: String,
        required: true,
        //using the match code to ensure that the mail is in a correct format
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }
});

//exporting the users module
module.exports = mongoose.model('User', userSchema);