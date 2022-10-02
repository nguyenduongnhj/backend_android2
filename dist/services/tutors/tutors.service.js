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
exports.TutorsService = void 0;
const common_1 = require("@nestjs/common");
const create_profile_dto_1 = require("../../commons/dtos/profile/create-profile.dto");
const profile_model_1 = require("../../database/models/profile.model");
const mongoose_1 = require("mongoose");
const specialization_profile_dto_1 = require("../../commons/dtos/profile/specialization-profile.dto");
const specialization_profile_model_1 = require("../../database/models/specialization-profile.model");
const users_service_1 = require("../users/users.service");
const subject_model_1 = require("../../database/models/subject.model");
const subject_dto_1 = require("../../commons/dtos/profile/subject.dto");
const user_model_1 = require("../../database/models/user.model");
let TutorsService = class TutorsService {
    constructor(userService) {
        this.userService = userService;
    }
    async getProfileTutor(id) {
        try {
            let idUser = mongoose_1.Types.ObjectId(id);
            return await profile_model_1.ProfileModel.findOne({ user_id: idUser });
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async existsProfile(id) {
        let idUser = mongoose_1.Types.ObjectId(id);
        return profile_model_1.ProfileModel.exists({ user_id: idUser });
    }
    async updateProfileTutor(userId, updateTodoDto) {
        return await profile_model_1.ProfileModel.updateOne({ user_id: userId }, updateTodoDto);
    }
    async createProfileTutor(userId, createTodoDto) {
        try {
            var profile = new profile_model_1.ProfileModel(Object.assign(Object.assign({}, createTodoDto), { user_id: userId }));
            return profile.save();
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    async createTeachingRecords(id, dataDto) {
        var profile = new specialization_profile_model_1.SpecializationProfileModel(Object.assign(Object.assign({}, dataDto), { user_id: id }));
        return await profile.save();
    }
    async updateTeachingRecords(id, dataDto) {
        return await specialization_profile_model_1.SpecializationProfileModel.updateOne({ user_id: id }, dataDto);
    }
    async getTeachingRecords(id) {
        return await specialization_profile_model_1.SpecializationProfileModel.findOne({ user_id: id });
    }
    async existsTeachingRecords(id) {
        let idUser = mongoose_1.Types.ObjectId(id);
        return specialization_profile_model_1.SpecializationProfileModel.exists({ user_id: idUser });
    }
    async addSubject(dataDto) {
        var subject = new subject_model_1.SubjectModel(Object.assign({}, dataDto));
        return await subject.save();
    }
    async getListSubject() {
        return await subject_model_1.SubjectModel.find();
    }
    async updateSubject(id, dataDto) {
        return await subject_model_1.SubjectModel.updateOne({ _id: id }, dataDto);
    }
};
TutorsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], TutorsService);
exports.TutorsService = TutorsService;
//# sourceMappingURL=tutors.service.js.map