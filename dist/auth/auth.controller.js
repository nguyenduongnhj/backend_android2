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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const users_service_1 = require("../services/users/users.service");
const mailer_service_1 = require("../modules/mailer/mailer.service");
const response_interface_1 = require("../commons/interfaces/response.interface");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const create_user_dto_1 = require("../commons/dtos/users/create-user.dto");
const response_dto_1 = require("../commons/dtos/response.dto");
let AuthController = class AuthController {
    constructor(authService, usersService, mailerService) {
        this.authService = authService;
        this.usersService = usersService;
        this.mailerService = mailerService;
    }
};
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService,
        mailer_service_1.MailerService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map