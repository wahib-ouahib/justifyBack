const mongoose = require('mongoose');

const unjustifiedText = mongoose.Schema({
    //_id: mongoose.Schema.types.ObjectId,*/
    size: Number
});

//exporting the module
module.exports = mongoose.model('Texts', unjustifiedText);