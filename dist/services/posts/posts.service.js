"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const like_dto_1 = require("../../commons/dtos/post/like.dto");
const post_dto_1 = require("../../commons/dtos/post/post.dto");
const content_type_enum_1 = require("../../commons/enum/content-type.enum");
const content_interface_1 = require("../../commons/interfaces/post/content.interface");
const helpers_1 = require("../../commons/helpers");
const paginate_interface_1 = require("../../commons/interfaces/paginate.interface");
const like_model_1 = require("../../database/models/like.model");
const post_model_1 = require("../../database/models/post.model");
const mongoose_1 = require("mongoose");
let PostsService = class PostsService {
    async savePost(postDto, userId) {
        let model = new post_model_1.PostModel(Object.assign(Object.assign({}, postDto), { user_id: userId }));
        return await model.save();
    }
    async getListPost(page, idUser) {
        let skip = page * 10;
        let listPost = {
            data: [],
            next_page: "",
            prev_page: ""
        };
        var matchLike = {};
        if (idUser != "") {
            matchLike = {
                $lookup: {
                    from: 'likes',
                    let: { "post": "$_id" },
                    "pipeline": [
                        { "$match": {
                                $and: [
                                    { "$expr": { "$eq": ["$post_id", "$$post"] } },
                                    { "$expr": { "$eq": ["$user_id", mongoose_1.Types.ObjectId(idUser)] } }
                                ]
                            } }
                    ],
                    "as": "likes"
                }
            };
        }
        else {
            matchLike = {
                $addFields: {
                    "likes": []
                }
            };
        }
        var totalLike = {
            $lookup: {
                from: 'likes',
                let: { "post": "$_id" },
                "pipeline": [
                    {
                        "$match": { "$expr": { "$eq": ["$post_id", "$$post"] } }
                    }
                ],
                "as": "all_like"
            }
        };
        var totalComment = {
            $lookup: {
                from: 'comments',
                let: { "post": "$_id" },
                "pipeline": [
                    {
                        "$match": { "$expr": { "$eq": ["$post_id", "$$post"] } }
                    }
                ],
                "as": "all_comment"
            }
        };
        let matchUser = {
            $lookup: {
                from: 'users',
                let: { "userId": "$user_id" },
                "pipeline": [
                    { "$match": {
                            "$expr": { "$eq": ["$_id", "$$userId"] }
                        } }
                ],
                "as": "user"
            }
        };
        let project = {
            $project: {
                "user.auth": 0,
                "user.roles": 0,
                "user.gender": 0,
                "user.point": 0,
                "user.username": 0,
                "user.password": 0,
                "user.email": 0,
                "user.phone_number": 0,
                "user.address": 0,
                "user.birthday": 0,
                "user.created_at": 0,
                "user.updated_at": 0,
                "likes": 0,
                "all_like": 0,
                "all_comment": 0
            }
        };
        let data = await post_model_1.PostModel.aggregate([
            matchLike,
            totalLike,
            totalComment,
            {
                $addFields: {
                    "isLike": { "$gt": [{ "$size": "$likes" }, 0] },
                    "total_like": { "$size": "$all_like" },
                    "total_comment": { "$size": "$all_comment" },
                }
            },
            matchUser,
            {
                $unwind: {
                    path: "$user",
                    preserveNullAndEmptyArrays: true
                }
            },
            project,
            { $sort: { created_at: -1 } },
            { $skip: skip },
            { $limit: 10 },
        ]);
        listPost["posts"] = helpers_1.shuffle(data);
        listPost['next_page'] = 'posts?page=' + (page * 1 + 1);
        listPost['prev_page'] = 'posts?page=' + (page < 1 ? page : page - 1);
        return listPost;
    }
    async deletePost(idPost) {
        return await post_model_1.PostModel.deleteOne({ _id: idPost });
    }
    async getListPostById(idUser, page) {
        let skip = page * 10;
        let listPost = {
            data: [],
            next_page: "",
            prev_page: ""
        };
        var matchLike = {};
        var totalLike = {
            $lookup: {
                from: 'likes',
                let: { "post": "$_id" },
                "pipeline": [
                    {
                        "$match": { "$expr": { "$eq": ["$post_id", "$$post"] } }
                    }
                ],
                "as": "all_like"
            }
        };
        var totalComment = {
            $lookup: {
                from: 'comments',
                let: { "post": "$_id" },
                "pipeline": [
                    {
                        "$match": { "$expr": { "$eq": ["$post_id", "$$post"] } }
                    }
                ],
                "as": "all_comment"
            }
        };
        if (idUser != "") {
            matchLike = {
                $lookup: {
                    from: 'likes',
                    let: { "post": "$_id" },
                    "pipeline": [
                        { "$match": {
                                $and: [
                                    { "$expr": { "$eq": ["$post_id", "$$post"] } },
                                    { "$expr": { "$eq": ["$user_id", mongoose_1.Types.ObjectId(idUser)] } }
                                ]
                            } }
                    ],
                    "as": "likes"
                }
            };
        }
        else {
            matchLike = {
                $addFields: {
                    "likes": []
                }
            };
        }
        let matchUser = {
            $lookup: {
                from: 'users',
                let: { "userId": "$user_id" },
                "pipeline": [
                    { "$match": {
                            "$expr": { "$eq": ["$_id", "$$userId"] }
                        } }
                ],
                "as": "user"
            }
        };
        let project = {
            $project: {
                "user.auth": 0,
                "user.roles": 0,
                "user.gender": 0,
                "user.point": 0,
                "user.username": 0,
                "user.password": 0,
                "user.email": 0,
                "user.phone_number": 0,
                "user.address": 0,
                "user.birthday": 0,
                "user.created_at": 0,
                "user.updated_at": 0,
                "likes": 0,
                "all_like": 0,
                "all_comment": 0,
            }
        };
        let data = await post_model_1.PostModel.aggregate([
            {
                "$match": {
                    "$expr": { "$eq": ["$user_id", mongoose_1.Types.ObjectId(idUser)] }
                }
            },
            totalLike,
            totalComment,
            matchLike,
            {
                $addFields: {
                    "isLike": { "$gt": [{ "$size": "$likes" }, 0] },
                    "total_like": { "$size": "$all_like" },
                    "total_comment": { "$size": "$all_comment" },
                }
            },
            matchUser,
            { $unwind: {
                    path: "$user",
                    preserveNullAndEmptyArrays: true
                } },
            project,
            { $sort: { created_at: -1 } },
            { $skip: skip },
            { $limit: 10 },
        ]);
        listPost["posts"] = data;
        listPost['next_page'] = 'posts/' + idUser + '?page=' + (page * 1 + 1);
        listPost['prev_page'] = 'posts/' + idUser + '?page=' + (page < 1 ? page : page - 1);
        return listPost;
    }
    async getDetail(idPost, idUser) {
        var matchLike = {};
        var totalLike = {
            $lookup: {
                from: 'likes',
                let: { "post": "$_id" },
                "pipeline": [
                    {
                        "$match": { "$expr": { "$eq": ["$post_id", "$$post"] } }
                    }
                ],
                "as": "all_like"
            }
        };
        var totalComment = {
            $lookup: {
                from: 'comments',
                let: { "post": "$_id" },
                "pipeline": [
                    {
                        "$match": { "$expr": { "$eq": ["$post_id", "$$post"] } }
                    }
                ],
                "as": "all_comment"
            }
        };
        if (idUser != "") {
            matchLike = {
                $lookup: {
                    from: 'likes',
                    let: { "post": "$_id" },
                    "pipeline": [
                        { "$match": {
                                $and: [
                                    { "$expr": { "$eq": ["$post_id", "$$post"] } },
                                    { "$expr": { "$eq": ["$user_id", mongoose_1.Types.ObjectId(idUser)] } }
                                ]
                            } }
                    ],
                    "as": "likes"
                }
            };
        }
        else {
            matchLike = {
                $addFields: {
                    "likes": []
                }
            };
        }
        let matchUser = {
            $lookup: {
                from: 'users',
                let: { "userId": "$user_id" },
                "pipeline": [
                    { "$match": {
                            "$expr": { "$eq": ["$_id", "$$userId"] }
                        } }
                ],
                "as": "user"
            }
        };
        let project = {
            $project: {
                "user.auth": 0,
                "user.roles": 0,
                "user.gender": 0,
                "user.point": 0,
                "user.username": 0,
                "user.password": 0,
                "user.email": 0,
                "user.phone_number": 0,
                "user.address": 0,
                "user.birthday": 0,
                "user.created_at": 0,
                "user.updated_at": 0,
                "likes": 0,
                "all_like": 0,
                "all_comment": 0,
            }
        };
        let data = await post_model_1.PostModel.aggregate([
            {
                "$match": {
                    "$expr": { "$eq": ["$_id", mongoose_1.Types.ObjectId(idPost)] }
                }
            },
            totalLike,
            totalComment,
            matchLike,
            {
                $addFields: {
                    "isLike": { "$gt": [{ "$size": "$likes" }, 0] },
                    "total_like": { "$size": "$all_like" },
                    "total_comment": { "$size": "$all_comment" },
                }
            },
            matchUser,
            { $unwind: {
                    path: "$user",
                    preserveNullAndEmptyArrays: true
                } },
            project,
        ]);
        if (data == null || data.length < 1) {
            return null;
        }
        return data[0];
    }
    async saveVideo(idPost, data) {
        let content;
        content.video = data;
        content.type = content_type_enum_1.ContentType.VIVDEO;
        return await post_model_1.PostModel.updateOne({ _id: idPost });
    }
    async saveImage(idPost, data) {
        let content;
        content.image = data;
        content.type = content_type_enum_1.ContentType.IMAGE;
        return post_model_1.PostModel.updateOne({ _id: idPost }, content);
    }
    async updatePost(idPost, postDto) {
        return await post_model_1.PostModel.updateOne({ _id: idPost }, postDto);
    }
    async like(idPost, idUser) {
        let user = mongoose_1.Types.ObjectId(idUser);
        let post = mongoose_1.Types.ObjectId(idPost);
        let model = new like_model_1.LikeModel({ user_id: user, post_id: post });
        return await model.save();
    }
    async dislike(idPost, idUser) {
        let user = mongoose_1.Types.ObjectId(idUser);
        let post = mongoose_1.Types.ObjectId(idPost);
        return like_model_1.LikeModel.findOneAndDelete({ user_id: user, post_id: post });
    }
    async isLike(idPost, idUser) {
        let user = mongoose_1.Types.ObjectId(idUser);
        let post = mongoose_1.Types.ObjectId(idPost);
        return like_model_1.LikeModel.exists({ user_id: user, post_id: post });
    }
};
PostsService = __decorate([
    common_1.Injectable()
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map