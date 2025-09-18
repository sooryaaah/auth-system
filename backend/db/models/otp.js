const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300 // auto delete after 5 minutes
    }
});

// ✅ Fix OverwriteModelError by checking if it already exists
module.exports = mongoose.models.otp || mongoose.model("otp", otpSchema);

