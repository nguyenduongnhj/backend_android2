"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const comment_dto_1 = require("../../commons/dtos/comment/comment.dto");
const response_dto_1 = require("../../commons/dtos/response.dto");
const comments_service_1 = require("src/services/comments/comments.service");
let CommentsController = class CommentsController {
    constructor(service) {
        this.service = service;
    }
    async getListComment(params, page, req) {
        let idPost = params.id;
        if (page == null) {
            page = 0;
        }
        return new response_dto_1.ResponseSuccess("COMMENT.GETLIST.SUCCESS", await this.service.getListComment(idPost, page));
    }
    async savePost(req, commentDto) {
        let id = req.user.id;
        return new response_dto_1.ResponseSuccess("COMMENT.CREATE.SUCCESS", this.service.saveComment(id, commentDto));
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Query('page')),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getListComment", null);
__decorate([
    common_1.Post('upload'),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "savePost", null);
CommentsController = __decorate([
    common_1.Controller('v1/comments'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _a : Object])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map