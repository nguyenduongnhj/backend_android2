"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = exports.PostModel = void 0;
const mongoose_1 = require("mongoose");
const content_interface_1 = require("../../commons/interfaces/post/content.interface");
const PostSchema = new mongoose_1.Schema({
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
    },
    type: {
        type: String,
        enum: ['POST', 'FIND_TUTOR', 'FIND_STUDENT'],
        default: 'POST'
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.PostSchema = PostSchema;
PostSchema.set('toObject', { virtuals: true });
PostSchema.set('toJSON', { virtuals: true });
PostSchema.virtual('total_like', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'post_id',
    justOne: false,
    count: true
});
PostSchema.virtual('total_comment', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'post_id',
    justOne: false,
    count: true
});
const PostModel = mongoose_1.model('Post', PostSchema, 'posts');
exports.PostModel = PostModel;
//# sourceMappingURL=post.model.js.map