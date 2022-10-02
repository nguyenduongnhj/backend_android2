"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeSchema = exports.LikeModel = void 0;
const mongoose_1 = require("mongoose");
const LikeSchema = new mongoose_1.Schema({
    post_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "Post",
        require: true,
    },
    user_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
        require: true,
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.LikeSchema = LikeSchema;
LikeSchema.set('toObject', { virtuals: true });
LikeSchema.set('toJSON', { virtuals: true });
const LikeModel = mongoose_1.model('Like', LikeSchema, 'likes');
exports.LikeModel = LikeModel;
//# sourceMappingURL=like.model.js.map