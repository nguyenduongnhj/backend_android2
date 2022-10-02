"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomModel = exports.ClassroomSchema = void 0;
const mongoose_1 = require("mongoose");
const classroom_status_enum_1 = require("../../commons/enum/classroom-status.enum");
const address_interface_1 = require("../../commons/interfaces/address.interface");
exports.ClassroomSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    subject_id: {
        type: mongoose_1.Types.ObjectId,
        required: false,
        default: null,
        ref: 'Subject'
    },
    teacher_id: {
        type: mongoose_1.Types.ObjectId,
        required: false,
        default: null,
        ref: 'User'
    },
    description: String,
    fee_per_lesson: {
        type: Number,
        default: 0
    },
    tuition_fee: {
        type: Number,
        default: 0
    },
    number_students: {
        type: Number,
        default: 1
    },
    status: {
        type: String,
        enum: [classroom_status_enum_1.ClassroomStatusEnum.PENDING, classroom_status_enum_1.ClassroomStatusEnum.STARTED, classroom_status_enum_1.ClassroomStatusEnum.DONE],
        require: true,
        default: classroom_status_enum_1.ClassroomStatusEnum.PENDING
    },
    topic: {
        type: [String]
    },
    address: {
        address_detail: String,
        ward: {
            code: String,
            name: String
        },
        province: {
            code: String,
            name: String
        },
        district: {
            code: String,
            name: String
        },
        full_address: String
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.ClassroomSchema.set('toObject', { virtuals: true });
exports.ClassroomSchema.set('toJSON', { virtuals: true });
exports.ClassroomSchema.virtual('teacher', {
    ref: 'User',
    localField: 'teacher_id',
    foreignField: '_id',
    justOne: true
});
exports.ClassroomSchema.virtual('subject', {
    ref: 'Subject',
    localField: 'subject_id',
    foreignField: '_id',
    justOne: true
});
exports.ClassroomSchema.virtual('student_classrooms', {
    ref: 'StudentClassroom',
    localField: '_id',
    foreignField: 'classroom_id'
});
exports.ClassroomModel = mongoose_1.model('Classroom', exports.ClassroomSchema, 'classrooms');
//# sourceMappingURL=classroom.model.js.map