"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comment_dto_1 = require("../../commons/dtos/comment/comment.dto");
const comment_model_1 = require("../../database/models/comment.model");
const mongoose_1 = require("mongoose");
let CommentsService = class CommentsService {
    async getListComment(id, page) {
        let skip = page * 10;
        let listComment = {
            data: [],
            next_page: "",
            prev_page: ""
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
            }
        };
        let data = await comment_model_1.CommentModel.aggregate([
            {
                "$match": {
                    "$expr": { "$eq": ["$post_id", mongoose_1.Types.ObjectId(id)] }
                }
            },
            matchUser,
            {
                $unwind: {
                    path: "$user",
                    preserveNullAndEmptyArrays: true
                }
            },
            project
        ]).sort({ created_at: "desc" }).skip(skip).limit(10);
        listComment["comments"] = data;
        listComment["next_page"] = "comments/" + id + "?page=" + (page * 1 + 1);
        listComment["prev_page"] = "comments/" + id + "?page=" + (page < 1 ? page : page - 1);
        return listComment;
    }
    async saveComment(user_id, commentDto) {
        let model = new comment_model_1.CommentModel(Object.assign(Object.assign({}, commentDto), { user_id: mongoose_1.Types.ObjectId(user_id) }));
        return await model.save();
    }
    async updateComment(user_id, commentDto) {
        return await comment_model_1.CommentModel.updateOne({ user_id: mongoose_1.Types.ObjectId(user_id) }, commentDto);
    }
};
CommentsService = __decorate([
    common_1.Injectable()
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map