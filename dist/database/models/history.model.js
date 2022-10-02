"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorySchema = exports.HistoryModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const HistorySchema = new mongoose_1.Schema({
    investor_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "Investor",
        require: true
    },
    type: {
        type: String,
        enum: ['saved', 'applied'],
        default: 'saved'
    },
    user_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
        require: true
    },
    job_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "Job",
        require: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.HistorySchema = HistorySchema;
HistorySchema.set('toObject', { virtuals: true });
HistorySchema.set('toJSON', { virtuals: true });
const HistoryModel = mongoose_1.model('History', HistorySchema, 'historys');
exports.HistoryModel = HistoryModel;
//# sourceMappingURL=history.model.js.map