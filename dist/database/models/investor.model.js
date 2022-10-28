"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorSchema = exports.InvestorModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const InvestorSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: [true, "Email is exists"],
        dropDups: true
    },
    cover_image: {
        type: String,
        default: '\\storage\\avatar.png'
    },
    avatar: {
        type: String,
        default: '\\storage\\avatar.png'
    },
    phone_number: {
        type: String,
        required: [true, 'phone number required']
    },
    full_name: {
        type: String,
        required: [true, 'name required']
    },
    other: String,
    introduct: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.InvestorSchema = InvestorSchema;
InvestorSchema.set('toObject', { virtuals: true });
InvestorSchema.set('toJSON', { virtuals: true });
const InvestorModel = mongoose_1.model('Investor', InvestorSchema, 'investors');
exports.InvestorModel = InvestorModel;
//# sourceMappingURL=investor.model.js.map