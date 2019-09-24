const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {type: String, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true}
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);