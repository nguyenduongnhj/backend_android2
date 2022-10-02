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
exports.TutorsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const tutors_service_1 = require("src/services/tutors/tutors.service");
const create_profile_dto_1 = require("../../commons/dtos/profile/create-profile.dto");
const response_dto_1 = require("../../commons/dtos/response.dto");
const specialization_profile_dto_1 = require("../../commons/dtos/profile/specialization-profile.dto");
const subject_dto_1 = require("../../commons/dtos/profile/subject.dto");
let TutorsController = class TutorsController {
    constructor(services) {
        this.services = services;
    }
    async create(req, createTodoDto) {
        let user = req.user;
        let exists = await this.services.existsProfile(user.id);
        if (exists) {
            return new response_dto_1.ResponseError('TUTOR.CREATE_PROFILE.EXIST', null, 400);
        }
        if (await this.services.createProfileTutor(user.id, createTodoDto)) {
            return new response_dto_1.ResponseSuccess('TUTOR.CREATE_PROFILE.SUCCESSFULLY');
        }
        return new response_dto_1.ResponseError('TUTOR.CREATE_PROFILE.FAILED', 400);
    }
    async update(req, dataDto) {
        var user = req.user;
        let exists = await this.services.existsProfile(user.id);
        console.log(exists);
        if (exists) {
            return new response_dto_1.ResponseSuccess('TUTOR.UPDATE_PROFILE.SUCCESSFULLY', await this.services.updateProfileTutor(user.id, dataDto));
        }
        return new response_dto_1.ResponseSuccess('TUTOR.UPDATE_PROFILE.SUCCESSFULLY', await this.services.createProfileTutor(user.id, dataDto));
    }
    async getProfile(params, req) {
        let id = params.id;
        let data = await this.services.getProfileTutor(id);
        return new response_dto_1.ResponseSuccess("GET.SPECIALIZATION.SUCCESS", data);
    }
    async getTeachingRecords(params, req) {
        let id = params.id;
        let data = await this.services.getTeachingRecords(id);
        if (req.user.id == id) {
            return new response_dto_1.ResponseSuccess("GET.SPECIALIZATION.SUCCESS", data);
        }
    }
    async updateTeachingRecords(req, dataDto) {
        let id = req.user.id;
        let exists = await this.services.existsProfile(id);
        if (exists) {
            return new response_dto_1.ResponseSuccess("UPDATE.SPECIALIZATION.SUCCESS", this.services.updateTeachingRecords(id, dataDto));
        }
        return new response_dto_1.ResponseSuccess("UPDATE.SPECIALIZATION.SUCCESS", await this.services.createTeachingRecords(id, dataDto));
    }
    async getListSubject() {
        return await this.services.getListSubject();
    }
    async createSubject(dataDto) {
        return await this.services.addSubject(dataDto);
    }
    async updateSubject(req, dataDto) {
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "create", null);
__decorate([
    common_1.Post('update'),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "update", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "getProfile", null);
__decorate([
    common_1.Get('specialization/:id'),
    __param(0, common_1.Param()),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "getTeachingRecords", null);
__decorate([
    common_1.Post('specialization/update'),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, specialization_profile_dto_1.ProfileSpecializationDto]),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "updateTeachingRecords", null);
__decorate([
    common_1.Get('subject/getlist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "getListSubject", null);
__decorate([
    common_1.Post('subject/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subject_dto_1.SubjectDto]),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "createSubject", null);
__decorate([
    common_1.Post('subject/update'),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, subject_dto_1.SubjectDto]),
    __metadata("design:returntype", Promise)
], TutorsController.prototype, "updateSubject", null);
TutorsController = __decorate([
    common_1.Controller('v1/tutors'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof tutors_service_1.TutorsService !== "undefined" && tutors_service_1.TutorsService) === "function" ? _a : Object])
], TutorsController);
exports.TutorsController = TutorsController;
//# sourceMappingURL=tutors.controller.js.map