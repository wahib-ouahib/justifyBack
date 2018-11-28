const mongoose = require('mongoose');

//defining the text schema
const unjustifiedText = mongoose.Schema({
    size: Number
});

//exporting the text schema module
module.exports = mongoose.model('Texts', unjustifiedText);