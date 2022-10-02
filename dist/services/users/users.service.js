"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../../database/models/user.model");
const create_user_dto_1 = require("../../commons/dtos/users/create-user.dto");
let UsersService = class UsersService {
    async findAll() {
        return user_model_1.UserModel.find().exec();
    }
    async existsByEmail(email) {
        return await user_model_1.UserModel.exists({ email });
    }
    async existsByUsername(username) {
        return await user_model_1.UserModel.exists({ username });
    }
    async existsByPhoneNumber(phone_number) {
        return await user_model_1.UserModel.exists({ phone_number });
    }
    async findOne(filters) {
        return await user_model_1.UserModel.findOne(filters);
    }
    async create(createTodoDto) {
        var user = new user_model_1.UserModel(Object.assign({}, createTodoDto));
        return user.save();
    }
    async getUser(id) {
        try {
            return await user_model_1.UserModel.findOne({ cmtnd: id });
        }
        catch (e) {
            return null;
        }
    }
    async setAvatar(userId, avatarUrl) {
        return await user_model_1.UserModel.updateOne({ _id: userId }, { avatar: avatarUrl });
    }
    async update(userId, updateUserDto) {
        return await user_model_1.UserModel.updateOne({ _id: userId }, Object.assign({}, updateUserDto)).exec();
    }
    async updatePassword(userId, password) {
        return await user_model_1.UserModel.updateOne({ _id: userId }, { password: password }).exec();
    }
};
UsersService = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map