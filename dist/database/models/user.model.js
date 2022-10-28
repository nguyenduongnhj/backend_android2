"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const UserSchema = new mongoose_1.Schema({
    other: String,
    university: String,
    level: String,
    address: String,
    introduct: String,
    exp: String,
    skill: String,
    career: {
        type: String,
        required: [true, 'User name required']
    },
    user_name: {
        type: String,
        required: [true, 'User name required']
    },
    email: {
        type: String,
        unique: [true, "Email is exists"],
        dropDups: true
    },
    password: {
        type: String,
        require: true
    },
    full_name: {
        type: String,
        required: [true, 'name required']
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    avatar: {
        type: String,
        default: config_1.default.files.baseDirectory + '/defaults/avatar.png'
    },
    phone_number: {
        type: String,
        required: [true, 'phone number required']
    },
    birthday: Date,
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