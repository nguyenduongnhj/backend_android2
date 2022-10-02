"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectSchema = exports.SubjectModel = void 0;
const mongoose_1 = require("mongoose");
const SubjectSchema = new mongoose_1.Schema({
    name_subject: {
        type: String,
        require: true
    },
    topic: {
        type: [String],
        require: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.SubjectSchema = SubjectSchema;
const SubjectModel = mongoose_1.model('Subject', SubjectSchema, 'subjects');
exports.SubjectModel = SubjectModel;
//# sourceMappingURL=subject.model.js.map