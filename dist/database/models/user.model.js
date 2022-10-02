"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const UserSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: [true, 'First name required']
    },
    cmtnd: {
        type: String,
        required: true
    },
    birthday: Date,
    phone_number: {
        type: String,
        unique: [true, "Phone is exists"],
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    point: {
        type: Number,
        default: 0
    },
    money: {
        type: Number,
        default: 0
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.UserSchema = UserSchema;
UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });
const UserModel = mongoose_1.model('User', UserSchema, 'users');
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map