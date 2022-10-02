"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClassroomModel = exports.StudentClassroomSchema = void 0;
const mongoose_1 = require("mongoose");
exports.StudentClassroomSchema = new mongoose_1.Schema({
    classroom_id: {
        type: mongoose_1.Types.ObjectId,
        required: false,
        default: null,
        ref: 'Classroom'
    },
    student_id: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.StudentClassroomSchema.set('toObject', { virtuals: true });
exports.StudentClassroomSchema.set('toJSON', { virtuals: true });
exports.StudentClassroomSchema.virtual('students', {
    ref: 'User',
    localField: 'student_id',
    foreignField: '_id'
});
exports.StudentClassroomSchema.virtual('classroom', {
    ref: 'Classroom',
    localField: 'classroom_id',
    foreignField: '_id',
    justOne: true
});
exports.StudentClassroomModel = mongoose_1.model('StudentClassroom', exports.StudentClassroomSchema, 'student_classrooms');
//# sourceMappingURL=student-classroom.model.js.map