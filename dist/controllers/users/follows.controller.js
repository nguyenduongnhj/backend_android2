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
exports.FollowersController = void 0;
const common_1 = require("@nestjs/common");
const follows_service_1 = require("src/services/users/follows.service");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const response_dto_1 = require("../../commons/dtos/response.dto");
const response_interface_1 = require("../../commons/interfaces/response.interface");
const follow_dto_1 = require("../../commons/dtos/follow/follow.dto");
let FollowersController = class FollowersController {
    constructor(followsService) {
        this.followsService = followsService;
    }
    async postFollowUser(followDto, req) {
        let user = req.user;
        if (user.id === followDto.follow_id) {
            throw new common_1.BadRequestException('FOLLOW.POST_FOLLOW.FAILED');
        }
        let followed = await this.followsService.followUser(user.id, followDto.follow_id);
        if (!followed)
            throw new common_1.BadRequestException('FOLLOW.POST_FOLLOW.FAILED');
        return new response_dto_1.ResponseSuccess('FOLLOW.POST_FOLLOW.SUCCESSFULLY');
    }
    async postUnFollowUser(followDto, req) {
        let user = req.user;
        let unfollow = await this.followsService.unFollowUser(user.id, followDto.follow_id);
        if (!unfollow)
            throw new common_1.BadRequestException('FOLLOW.POST_UNFOLLOW.FAILED');
        return new response_dto_1.ResponseSuccess('FOLLOW.POST_UNFOLLOW.SUCCESSFULLY', unfollow);
    }
    async checkFollowingOneUser(req, followingId) {
        return new response_dto_1.ResponseSuccess('FOLLOW.POST_UNFOLLOW.SUCCESSFULLY', {
            is_following: await this.followsService.checkFollowingUser(req.user.id, followingId)
        });
    }
};
__decorate([
    common_1.Post('follow'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [follow_dto_1.FollowDto, Object]),
    __metadata("design:returntype", Promise)
], FollowersController.prototype, "postFollowUser", null);
__decorate([
    common_1.Post('unfollow'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [follow_dto_1.FollowDto, Object]),
    __metadata("design:returntype", Promise)
], FollowersController.prototype, "postUnFollowUser", null);
__decorate([
    common_1.Get('users/:followingId/following'),
    common_1.HttpCode(200),
    __param(0, common_1.Request()),
    __param(1, common_1.Param('followingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FollowersController.prototype, "checkFollowingOneUser", null);
FollowersController = __decorate([
    common_1.Controller('v1/follows'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof follows_service_1.FollowsService !== "undefined" && follows_service_1.FollowsService) === "function" ? _a : Object])
], FollowersController);
exports.FollowersController = FollowersController;
//# sourceMappingURL=follows.controller.js.map