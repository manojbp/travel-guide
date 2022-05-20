const mongoose = require('mongoose');

const registerTemplate = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        
    },
    username: {
        type: String,
        required:true,
        
    },
    phoneno: {
        type: String,
        required:true,
        
    },
    password: {
        type: String,
        required:true,
        
    },
    // confirmPassword: {
    //     type: String,
    //     required:true,
        
    // },

})

module.exports = mongoose.model('travelguide',registerTemplate)