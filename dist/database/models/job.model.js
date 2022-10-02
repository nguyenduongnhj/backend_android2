"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchema = exports.JobModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const JobSchema = new mongoose_1.Schema({
    level: String,
    address: String,
    skill: String,
    salary: String,
    work: String,
    investor_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "Investor",
        require: true
    },
    company_name: {
        type: String,
        required: [true, 'company name name required']
    },
    other: String,
    age: Number,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.JobSchema = JobSchema;
JobSchema.set('toObject', { virtuals: true });
JobSchema.set('toJSON', { virtuals: true });
const JobModel = mongoose_1.model('Job', JobSchema, 'jobs');
exports.JobModel = JobModel;
//# sourceMappingURL=job.model.js.map