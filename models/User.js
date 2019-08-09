const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 },
    profile_pic: String,
});

mongoose.model('users', userSchema);