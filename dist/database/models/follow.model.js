"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowModel = exports.FollowSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FollowSchema = new mongoose_1.Schema({
    follower_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User"
    },
    following_id: {
        type: mongoose_1.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.FollowSchema.set('toObject', { virtuals: true });
exports.FollowSchema.set('toJSON', { virtuals: true });
exports.FollowSchema.virtual('follower', {
    ref: 'User',
    localField: 'follower_id',
    foreignField: '_id',
    justOne: true
});
exports.FollowSchema.virtual('following', {
    ref: 'User',
    localField: 'following_id',
    foreignField: '_id',
    justOne: true
});
exports.FollowModel = mongoose_1.model('Follow', exports.FollowSchema, 'follows');
//# sourceMappingURL=follow.model.js.map