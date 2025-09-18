const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true   // <-- typo fixed: "require" ➝ "required"
    },
    email: {
        type: String,
        required: true,
        unique: true     // optional: prevents duplicate emails
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models.users || mongoose.model("users", userSchema);
