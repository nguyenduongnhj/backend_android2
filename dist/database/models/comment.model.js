"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const content_interface_1 = require("../../commons/interfaces/post/content.interface");
const CommentSchema = new mongoose_1.Schema({
    post_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "Post",
        require: true,
    },
    user_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
        require: true,
    },
    content: {
        text: { type: String },
        image: { type: [String] },
        video: { type: [String] },
        type: {
            type: String,
            enum: ['TEXT', 'IMAGE', 'VIDEO', 'IMAGEANDVIDEO'],
            default: 'TEXT'
        }
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.CommentSchema = CommentSchema;
CommentSchema.set('toObject', { virtuals: true });
CommentSchema.set('toJSON', { virtuals: true });
const CommentModel = mongoose_1.model('Comment', CommentSchema, 'comments');
exports.CommentModel = CommentModel;
//# sourceMappingURL=comment.model.js.map