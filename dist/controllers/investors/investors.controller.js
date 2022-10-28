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
exports.InvestorsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const response_dto_1 = require("../../commons/dtos/response.dto");
const investors_service_1 = require("../../services/investors/investors.service");
let InvestorsController = class InvestorsController {
    constructor(service) {
        this.service = service;
    }
    async createInvestor(data) {
        try {
            await this.service.createInvestor(data);
            return new response_dto_1.ResponseSuccess("INVESTOR.REGISTER.SUCCESSFULLY");
        }
        catch (error) {
            console.log(error);
            throw new response_dto_1.ResponseError('INVESTOR.REGISTER.FAILED', error);
        }
    }
    async updateUser(userId, data) {
        try {
            await this.service.update(userId, data);
            return new response_dto_1.ResponseSuccess("INVESTOR.UPDATE.SUCCESSFULLY");
        }
        catch (error) {
            throw new response_dto_1.ResponseError('INVESTOR.UPDATE.FAILED');
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
], InvestorsController.prototype, "createInvestor", null);
__decorate([
    common_1.Post('update/:id'),
    common_1.HttpCode(200),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "updateUser", null);
InvestorsController = __decorate([
    common_1.Controller('v1/investors'),
    __metadata("design:paramtypes", [investors_service_1.InvestorsService])
], InvestorsController);
exports.InvestorsController = InvestorsController;
//# sourceMappingURL=investors.controller.js.map