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
exports.HistoryController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const history_dto_1 = require("../../commons/dtos/jobs/history.dto");
const response_dto_1 = require("../../commons/dtos/response.dto");
const history_model_1 = require("../../database/models/history.model");
const history_service_1 = require("../../services/history/history.service");
let HistoryController = class HistoryController {
    constructor(service) {
        this.service = service;
    }
    async createInvestor(data) {
        try {
            await this.service.createHistory(data);
            return new response_dto_1.ResponseSuccess("CREATE.JOB.SUCCESSFULLY");
        }
        catch (error) {
            console.log(error);
            throw new response_dto_1.ResponseError('CREATE.JOB.FAILED', error);
        }
    }
    async getListJob(page) {
        try {
            let result = this.service.getListHistory(page);
            return new response_dto_1.ResponseSuccess("GET.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e);
            return new response_dto_1.ResponseSuccess("GET.JOB.SUCCESSFULLY");
        }
    }
    async update(params, body) {
        try {
            let id = params.id;
            let data = body.type;
            let result = this.service.updateType(id, data);
            return new response_dto_1.ResponseSuccess("GET.JOB.SUCCESSFULLY", result);
        }
        catch (e) {
            console.log("e = " + e);
            return new response_dto_1.ResponseSuccess("GET.JOB.SUCCESSFULLY");
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
], HistoryController.prototype, "createInvestor", null);
__decorate([
    common_1.Get(''),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "getListJob", null);
__decorate([
    common_1.Post('update:/id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HistoryController.prototype, "update", null);
HistoryController = __decorate([
    common_1.Controller('v1/history'),
    __metadata("design:paramtypes", [history_service_1.HistoryService])
], HistoryController);
exports.HistoryController = HistoryController;
//# sourceMappingURL=history.controller.js.map