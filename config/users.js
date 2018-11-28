const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    //_id: mongoose.Schema.types.ObjectIdi"
    email: {type: String, required: true}
});

//exporting the module
module.exports = mongoose.model('User', userSchema);