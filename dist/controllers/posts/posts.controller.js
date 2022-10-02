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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const response_dto_1 = require("../../commons/dtos/response.dto");
const post_dto_1 = require("../../commons/dtos/post/post.dto");
const posts_service_1 = require("src/services/posts/posts.service");
const like_dto_1 = require("../../commons/dtos/post/like.dto");
let PostController = class PostController {
    constructor(service) {
        this.service = service;
    }
    async getListPost(page, req) {
        if (page == null) {
            page = 0;
        }
        try {
            let id = req.user.id;
            if (id == null || (typeof id == 'undefined')) {
                id = "";
            }
            return new response_dto_1.ResponseSuccess("GET.LIST.POST", await this.service.getListPost(page, id));
        }
        catch (e) {
            console.log("e = " + e);
            return new response_dto_1.ResponseSuccess("GET.LIST.POST", await this.service.getListPost(page, ""));
        }
    }
    validate(postDto) {
        if (postDto.content == null ||
            (postDto.content.text == "" &&
                postDto.content.text == null &&
                postDto.content.image.length < 1 &&
                postDto.content.video.length < 1)) {
            return false;
        }
        return true;
    }
    async getDetail(params, req) {
        let idPost = params.id;
        try {
            let id = req.user.id;
            if (id == null || (typeof id == 'undefined')) {
                id = "";
            }
            let data = new response_dto_1.ResponseSuccess("GET.DETAIL.POST", await this.service.getDetail(idPost, id));
            return data;
        }
        catch (e) {
            console.log("e = " + e);
            return new response_dto_1.ResponseSuccess("GET.DETAIL.POST", await this.service.getDetail(idPost, ""));
        }
    }
    async savePost(postDto, req) {
        let userId = req.user.id;
        if (!this.validate(postDto)) {
            return new response_dto_1.ResponseError("POST.CREATE.FAILED");
        }
        let post = await this.service.savePost(postDto, userId);
        let data = new response_dto_1.ResponseSuccess("POST.CREATE.SUCCESS", await this.service.getDetail(post._id, userId));
        return data;
    }
    async getListPostByIdUser(params, page) {
        let id = params.id;
        if (page == null) {
            page = 0;
        }
        return new response_dto_1.ResponseSuccess("GET.LIST.POST", await this.service.getListPostById(id, page));
    }
    async deletePost() {
    }
    async updatePost(postDto, params, req) {
        let idPost = params.id;
        let idUser = req.user.id;
        if (!(postDto.user_id == idUser)) {
            return new response_dto_1.ResponseError("POST.UPDATE.FAILED");
        }
        return new response_dto_1.ResponseSuccess("POST.UPDATE.SUCCESS", this.service.updatePost(idPost, postDto));
    }
    async like(params, req) {
        let idUser = req.user.id;
        return this.service.like(params.id, idUser);
    }
    async dislike(params, req) {
        let idUser = req.user.id;
        return this.service.dislike(params.id, idUser);
    }
};
__decorate([
    common_1.Get(''),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Query('page')),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getListPost", null);
__decorate([
    common_1.Get('detail/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getDetail", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "savePost", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getListPostByIdUser", null);
__decorate([
    common_1.Delete(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
__decorate([
    common_1.Post('update/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param()),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.CreatePostDto, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
__decorate([
    common_1.Get('like/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "like", null);
__decorate([
    common_1.Get('dislike/:id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "dislike", null);
PostController = __decorate([
    common_1.Controller('v1/posts'),
    __metadata("design:paramtypes", [typeof (_a = typeof posts_service_1.PostsService !== "undefined" && posts_service_1.PostsService) === "function" ? _a : Object])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=posts.controller.js.map