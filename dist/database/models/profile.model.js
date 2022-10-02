"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSchema = exports.ProfileModel = void 0;
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
        require: true
    },
    hight_school: {
        name: { type: String, require: true },
        date_graduation: { type: String, require: true },
    },
    university: {
        name: { type: String, require: true },
        major: { type: String, require: true },
        date_admission: { type: String, require: true },
        graduated: {
            type: Boolean,
            default: false
        },
    },
    prize: {
        type: [{
                type: { type: String },
                name: { type: String },
                desc: { type: String }
            }]
    },
    certificate: {
        name: { type: String },
        image: { type: String },
    },
    specialized: {
        type: [{
                type: { type: String },
                name: { type: String },
                desc: { type: String }
            }],
        require: true,
    },
    skill: {
        type: [{
                rate: { type: String },
                name: { type: String },
            }]
    },
    introduce: {
        type: String,
        require: true,
    },
    other: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.ProfileSchema = ProfileSchema;
const ProfileModel = mongoose_1.model('Profile', ProfileSchema, 'user_info');
exports.ProfileModel = ProfileModel;
//# sourceMappingURL=profile.model.js.map