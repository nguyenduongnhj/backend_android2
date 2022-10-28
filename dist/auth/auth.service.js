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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../services/users/users.service");
const user_model_1 = require("../database/models/user.model");
const create_user_dto_1 = require("../commons/dtos/users/create-user.dto");
const role_type_enum_1 = require("../commons/enum/role-type.enum");
const config_1 = require("../config");
const response_dto_1 = require("../commons/dtos/response.dto");
const path_1 = require("path");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        let filters = await this.username(username);
        const user = await user_model_1.UserModel.findOne(filters);
        if (user && await this.comparePassword(password, user.password)) {
            return user;
        }
        return null;
    }
    async login(user) {
        const userLogin = await this.validateUser(user.username, user.password);
        if (!userLogin)
            throw new common_1.UnauthorizedException('AUTH.LOGIN.FAILED');
        userLogin.password = null;
        const token = await this.createAccessToken(userLogin);
        return Object.assign({ user: userLogin }, token);
    }
    async createAccessToken(user) {
        const expiresIn = config_1.default.jwt.expiresIn;
        const userInfo = {
            username: user.user_name,
            sub: user.id,
        };
        const access_token = this.jwtService.sign(userInfo);
        return {
            expires_in: expiresIn,
            access_token: access_token,
        };
    }
    async hashPassword(password) {
        try {
            const salt = await bcrypt.genSaltSync(10);
            let passwordHash = await bcrypt.hashSync(password, salt);
            return passwordHash;
        }
        catch (e) {
            return null;
        }
    }
    async comparePassword(password, hashPassword) {
        try {
            return await bcrypt.compare(password, hashPassword);
        }
        catch (e) {
            return false;
        }
    }
    async username(username) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username)) {
            return { email: username };
        }
        if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(username)) {
            return { phone_number: username };
        }
        return { user_name: username };
    }
    async register(data) {
        const created = await this.usersService.create(Object.assign(Object.assign({}, data), { password: await this.hashPassword(data.password), avatar: path_1.join('/', config_1.default.files.baseDirectory, config_1.default.files.defaultsFolderName, 'avatar.png') }));
        const token = await this.createAccessToken(created);
        return Object.assign({ user: created }, token);
    }
    async changePassword(userId, oldPass, newPass) {
        let user = await user_model_1.UserModel.findById(userId);
        if (user) {
            if (await this.comparePassword(oldPass, user.password))
                return await this.usersService.updatePassword(userId, await this.hashPassword(newPass));
            return false;
        }
        return false;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map