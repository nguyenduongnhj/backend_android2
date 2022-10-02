"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecializationProfileSchema = exports.SpecializationProfileModel = void 0;
const mongoose_1 = require("mongoose");
const subject_interface_1 = require("../../commons/interfaces/profile/subject.interface");
const SpecializationProfileSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
        require: true,
    },
    position: {
        type: String,
        require: true
    },
    subject: {
        type: [{
                name_subject: { type: String },
                topic: [String]
            }],
        require: true
    },
    class_schedule: {
        type: [{
                day: String,
                section: {
                    type: [String],
                    enum: ['morning', 'afternoon', 'night']
                }
            }],
    },
    type: {
        type: String,
        enum: ['direct', 'online'],
        default: 'direct'
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.SpecializationProfileSchema = SpecializationProfileSchema;
const SpecializationProfileModel = mongoose_1.model('SpecializationProfile', SpecializationProfileSchema, 'specialization_profiles');
exports.SpecializationProfileModel = SpecializationProfileModel;
//# sourceMappingURL=specialization-profile.model.js.map