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
exports.JobsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const response_dto_1 = require("../../commons/dtos/response.dto");
const jobs_service_1 = require("../../services/jobs/jobs.service");
let JobsController = class JobsController {
    constructor(service) {
        this.service = service;
    }
    async createInvestor(data) {
        try {
            await this.service.createJob(data);
            return new response_dto_1.ResponseSuccess("CREATE.JOB.SUCCESSFULLY");
        }
        catch (error) {
            console.log(error);
            throw new response_dto_1.ResponseError('CREATE.JOB.FAILED', error);
        }
    }
    async getListJob(data, page) {
        try {
            let type = data.type;
            let content = data.content;
            var result;
            if (type == "address") {
                result = await this.service.getListJobByAddr(content, page);
            }
            else if (type == "work") {
                result = await this.service.getListJobByWork(content, page);
            }
            else {
                result = await this.service.getListJob(page);
            }
            return new response_dto_1.ResponseSuccess("GET.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e);
            result = await this.service.getListJob(page);
            return new response_dto_1.ResponseSuccess("GET.JOB.SUCCESSFULLY", result);
        }
    }
    async deleteJob(params) {
        let id = params.id;
        try {
            return new response_dto_1.ResponseSuccess("DELETE.POST.SUCCESS", await this.service.deleteJob(id));
        }
        catch (e) {
            console.log("e = " + e);
            return new response_dto_1.ResponseError("DELETE.POST.FAILED");
        }
    }
};
__decorate([
    common_1.Post('create'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "createInvestor", null);
__decorate([
    common_1.Post(''),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __param(1, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getListJob", null);
__decorate([
    common_1.Get('delete:/id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "deleteJob", null);
JobsController = __decorate([
    common_1.Controller('v1/jobs'),
    __metadata("design:paramtypes", [jobs_service_1.JobsService])
], JobsController);
exports.JobsController = JobsController;
//# sourceMappingURL=jobs.controller.js.map