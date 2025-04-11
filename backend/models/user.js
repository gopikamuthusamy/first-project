const mongoose = require('mongoose');

// Define the schema for users
const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true,  // Ensure the username is unique in the collection
        minlength: 5,  
        maxlength: 15,
        match: /^[a-zA-Z0-9]+$/,  // Restrict username to alphanumeric characters
        trim: true  
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 8,
        maxlength: 20, 
        match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
