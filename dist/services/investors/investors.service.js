"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorsService = void 0;
const common_1 = require("@nestjs/common");
const investor_dto_1 = require("../../commons/dtos/jobs/investor.dto");
const investor_model_1 = require("../../database/models/investor.model");
let InvestorsService = class InvestorsService {
    async createInvestor(createDto) {
        var investor = new investor_model_1.InvestorModel(Object.assign({}, createDto));
        return investor.save();
    }
    async findOne(filters) {
        return await investor_model_1.InvestorModel.findOne(filters);
    }
    async setAvatar(id, avatarUrl) {
        return await investor_model_1.InvestorModel.updateOne({ _id: id }, { avatar: avatarUrl });
    }
    async update(userId, updateDto) {
        return await investor_model_1.InvestorModel.updateOne({ _id: userId }, Object.assign({}, updateDto)).exec();
    }
};
InvestorsService = __decorate([
    common_1.Injectable()
], InvestorsService);
exports.InvestorsService = InvestorsService;
//# sourceMappingURL=investors.service.js.map