"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogSchema = exports.LogModel = void 0;
const mongoose_1 = require("mongoose");
const LogSchema = new mongoose_1.Schema({
    cmtnd: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.LogSchema = LogSchema;
const LogModel = mongoose_1.model('Log', LogSchema, 'log');
exports.LogModel = LogModel;
//# sourceMappingURL=log.model.js.map