"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicKeySchema = exports.PublicKeyModel = void 0;
const mongoose_1 = require("mongoose");
const PublicKeySchema = new mongoose_1.Schema({
    cmtnd: {
        type: String,
        required: true
    },
    modulus: {
        type: String,
        required: true
    },
    exponent: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.PublicKeySchema = PublicKeySchema;
const PublicKeyModel = mongoose_1.model('Publickey', PublicKeySchema, 'publickey');
exports.PublicKeyModel = PublicKeyModel;
//# sourceMappingURL=publickey.model.js.map