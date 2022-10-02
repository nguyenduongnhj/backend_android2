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
exports.AdministrativeUnitsController = void 0;
const common_1 = require("@nestjs/common");
const response_dto_1 = require("../../commons/dtos/response.dto");
const response_interface_1 = require("../../commons/interfaces/response.interface");
const administrative_units_service_1 = require("src/services/administrative-units/administrative-units.service");
let AdministrativeUnitsController = class AdministrativeUnitsController {
    constructor(administrativeUnitsService) {
        this.administrativeUnitsService = administrativeUnitsService;
    }
    async getVietNamProvinceList() {
        return new response_dto_1.ResponseSuccess('ADMINISTRATIVE_UNIT.VIET_NAM.GET_PROVINCE.SUCCESSFULLY', await this.administrativeUnitsService.getVietNamProvinceList());
    }
    async getVietNamDistrictList(provinceCode) {
        return new response_dto_1.ResponseSuccess('ADMINISTRATIVE_UNIT.VIET_NAM.GET_DISTRICT.SUCCESSFULLY', await this.administrativeUnitsService.getVietNamDistrictList(provinceCode));
    }
    async getVietNamWardList(districtCode) {
        return new response_dto_1.ResponseSuccess('ADMINISTRATIVE_UNIT.VIET_NAM.GET_WARD.SUCCESSFULLY', await this.administrativeUnitsService.getVietNamWardList(districtCode));
    }
};
__decorate([
    common_1.Get('viet-nam/provinces'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdministrativeUnitsController.prototype, "getVietNamProvinceList", null);
__decorate([
    common_1.Get('viet-nam/provinces/:provinceCode/districts'),
    __param(0, common_1.Param('provinceCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdministrativeUnitsController.prototype, "getVietNamDistrictList", null);
__decorate([
    common_1.Get('viet-nam/districts/:districtCode/wards'),
    __param(0, common_1.Param('districtCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdministrativeUnitsController.prototype, "getVietNamWardList", null);
AdministrativeUnitsController = __decorate([
    common_1.Controller('v1/administrative-units'),
    __metadata("design:paramtypes", [typeof (_a = typeof administrative_units_service_1.AdministrativeUnitsService !== "undefined" && administrative_units_service_1.AdministrativeUnitsService) === "function" ? _a : Object])
], AdministrativeUnitsController);
exports.AdministrativeUnitsController = AdministrativeUnitsController;
//# sourceMappingURL=administrative-units.controller.js.map