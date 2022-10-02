"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorySchema = exports.HistoryModel = void 0;
const mongoose_1 = require("mongoose");
const HistorySchema = new mongoose_1.Schema({
    cmtnd: {
        type: String,
        required: true
    },
    film_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "Film",
        require: true,
    },
    filmName: {
        type: String,
        require: true
    },
    time: {
        type: Date,
        default: Date()
    },
    point: {
        type: Number,
        require: true,
        default: 0
    },
    money: {
        type: Number,
        require: true,
        default: 0
    },
    state: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.HistorySchema = HistorySchema;
const HistoryModel = mongoose_1.model('History', HistorySchema, 'history');
exports.HistoryModel = HistoryModel;
//# sourceMappingURL=history.model.js.map