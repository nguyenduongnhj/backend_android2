"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeUnitsService = void 0;
const common_1 = require("@nestjs/common");
const administrative_unit_model_1 = require("../../database/models/administrative-unit.model");
const address_dto_1 = require("../../commons/dtos/address/address.dto");
const address_interface_1 = require("../../commons/interfaces/address.interface");
let AdministrativeUnitsService = class AdministrativeUnitsService {
    async getVietNamProvinceList() {
        return await administrative_unit_model_1.AdministrativeUnitModel.find({ level: 'Province' });
    }
    async getVietNamDistrictList(provinceCode) {
        return await administrative_unit_model_1.AdministrativeUnitModel.find({ level: 'District', upper_level_code: provinceCode });
    }
    async getVietNamWardList(districtCode) {
        return await administrative_unit_model_1.AdministrativeUnitModel.find({ level: 'Ward', upper_level_code: districtCode });
    }
    async getAndConcatAddressInfoFromWardCode(addressDto) {
        var ward = await administrative_unit_model_1.AdministrativeUnitModel.findOne({ code: addressDto.ward_code })
            .populate({
            path: 'district',
            populate: {
                path: 'province'
            }
        });
        if (!ward)
            return {
                address_detail: addressDto.address_detail,
                full_address: addressDto.address_detail
            };
        let district = ward.district;
        let province = district.province;
        let full_address = addressDto.address_detail + ', ' + String(ward.name) + ', ' + String(district.name) + ', ' + String(province.name);
        var address = {
            address_detail: addressDto.address_detail,
            district: district,
            province: province,
            full_address: full_address.trim(),
            ward: ward
        };
        return address;
    }
};
AdministrativeUnitsService = __decorate([
    common_1.Injectable()
], AdministrativeUnitsService);
exports.AdministrativeUnitsService = AdministrativeUnitsService;
//# sourceMappingURL=administrative-units.service.js.map