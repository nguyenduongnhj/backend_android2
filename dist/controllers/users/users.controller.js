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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../services/users/users.service");
const response_dto_1 = require("../../commons/dtos/response.dto");
const response_interface_1 = require("../../commons/interfaces/response.interface");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUser(data) {
        try {
            await this.usersService.create(data);
            return new response_dto_1.ResponseSuccess("USER.REGISTER.SUCCESSFULLY");
        }
        catch (error) {
            console.log(error);
            throw new response_dto_1.ResponseError('USER.REGISTER.FAILED', error);
        }
    }
    async updateUser(userId, data) {
        try {
            await this.usersService.update(userId, data);
            return new response_dto_1.ResponseSuccess("USER.UPDATE.SUCCESSFULLY");
        }
        catch (error) {
            throw new response_dto_1.ResponseError('USER.UPDATE.FAILED');
        }
    }
    async getUserData(req) {
        try {
            var user = await this.usersService.findOne({ _id: req.user.id });
            if (user)
                user.password = null;
            return new response_dto_1.ResponseSuccess("USER.GET_ME.SUCCESSFULLY", user);
        }
        catch (e) {
            console.log(e);
            return new response_dto_1.ResponseError("USER.GET_ME.FAILED", e, 400);
        }
    }
};
__decorate([
    common_1.Post('create'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Post('update/:id'),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Get('me'),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserData", null);
UsersController = __decorate([
    common_1.Controller('v1/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map