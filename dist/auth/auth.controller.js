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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const users_service_1 = require("../services/users/users.service");
const mailer_service_1 = require("../modules/mailer/mailer.service");
const response_interface_1 = require("../commons/interfaces/response.interface");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const change_password_dto_1 = require("./dtos/change-password.dto");
const create_user_dto_1 = require("../commons/dtos/users/create-user.dto");
const response_dto_1 = require("../commons/dtos/response.dto");
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    async login(data) {
        return new response_dto_1.ResponseSuccess("AUTH.LOGIN.USER_LOGIN_SUCCESSFULLY", await this.authService.login(data));
    }
    async register(data) {
        console.log(data);
        const userExistsByUsername = await this.usersService.existsByUsername(data.user_name);
        if (userExistsByUsername) {
            throw new common_1.ConflictException('AUTH.REGISTER.CONFLICT_USERNAME');
        }
        const userExistsByEmail = await this.usersService.existsByEmail(data.email);
        if (userExistsByEmail) {
            throw new common_1.ConflictException('AUTH.REGISTER.CONFLICT_EMAIL');
        }
        if (data.phone_number) {
            const userExistsByPhoneNumber = await this.usersService.existsByPhoneNumber(data.phone_number);
            if (userExistsByPhoneNumber) {
                throw new common_1.ConflictException('AUTH.REGISTER.CONFLICT_PHONENUMBER');
            }
        }
        try {
            await this.authService.register(data);
            return new response_dto_1.ResponseSuccess("AUTH.REGISTER.SUCCESSFULLY");
        }
        catch (error) {
            throw new common_1.BadRequestException('AUTH.REGISTER.FAILED');
        }
    }
    async changePassword(req, data) {
        let user = req.user;
        let { old_pass, new_pass } = data;
        if (await this.authService.changePassword(user.id, old_pass, new_pass)) {
            return new response_dto_1.ResponseSuccess("AUTH.CHANGE_PASSWORD.SUCCESSFULLY");
        }
        return new response_dto_1.ResponseError("AUTH.CHANGE_PASSWORD.FAILED");
    }
    async checkUsername(data) {
        let userName = data.username;
        console.log(userName);
        let check = await this.usersService.existsByUsername(userName);
        return new response_dto_1.ResponseSuccess("AUTH.CHECK_EMPTY_USER.SUCCESSFULLY", !check);
    }
};
__decorate([
    common_1.Post('login'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('register'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('change_password'),
    common_1.HttpCode(200),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    common_1.Post('check_username'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkUsername", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map