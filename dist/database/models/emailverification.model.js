"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerificationModel = exports.EmailVerificationSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EmailVerificationSchema = new mongoose_1.Schema({
    email: String,
    token: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.EmailVerificationModel = mongoose_1.model('EmailVerification', exports.EmailVerificationSchema, 'email_verifications');
//# sourceMappingURL=emailverification.model.js.map