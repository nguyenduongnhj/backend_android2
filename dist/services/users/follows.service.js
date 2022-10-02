"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowsService = void 0;
const common_1 = require("@nestjs/common");
const follow_model_1 = require("../../database/models/follow.model");
const paginate_interface_1 = require("../../commons/interfaces/paginate.interface");
const helpers_1 = require("../../commons/helpers");
let FollowsService = class FollowsService {
    async findAllFollowingsOfUser(followerId, page = 1, limit = 10) {
        try {
            let followings = await follow_model_1.FollowModel.find({ follower_id: followerId })
                .populate('following', 'username gender first_name avatar')
                .limit(limit * 1)
                .skip(page * limit)
                .exec();
            let count = await follow_model_1.FollowModel.find({ follower_id: followerId }).countDocuments();
            let data = {
                data: followings,
                pagination_options: helpers_1.createPaginationOptions(limit, page, count)
            };
            return data;
        }
        catch (e) {
            return null;
        }
    }
    async findAllFollowersOfUser(followingId, page = 0, limit = 10) {
        try {
            let followers = await follow_model_1.FollowModel.find({ following_id: followingId })
                .populate('follower', 'username gender first_name avatar')
                .limit(limit * 1).skip(page * limit).exec();
            let count = await follow_model_1.FollowModel.find({ following_id: followingId }).countDocuments();
            let data = {
                data: followers,
                pagination_options: helpers_1.createPaginationOptions(limit, page, count)
            };
            return data;
        }
        catch (e) {
            return null;
        }
    }
    async followUser(followerId, followId) {
        try {
            var follow = await follow_model_1.FollowModel.findOne({ 'follower_id': followerId, 'following_id': followId }).exec();
            if (follow) {
                return true;
            }
            await follow_model_1.FollowModel.create({ follower_id: followerId, following_id: followId });
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    async unFollowUser(followerId, followingId) {
        try {
            let unfollow = await follow_model_1.FollowModel.deleteOne({ 'follower_id': followerId, 'following_id': followingId });
            if (unfollow)
                return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    async checkFollowingUser(followerId, followingId) {
        let check = await follow_model_1.FollowModel.findOne({ follower_id: followerId, following_id: followingId });
        if (check)
            return true;
        return false;
    }
};
FollowsService = __decorate([
    common_1.Injectable()
], FollowsService);
exports.FollowsService = FollowsService;
//# sourceMappingURL=follows.service.js.map